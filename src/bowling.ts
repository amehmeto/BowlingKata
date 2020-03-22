export class Bowling {
    readonly MAX_FRAME_SCORE = 10
    readonly LAST_REGULAR_ROLL = 18;

    computeFinalScore(scoreLine: string): number{
        let score: number = 0
        let i: number = 0

        let rollCounter: number = 0
        while (scoreLine[i]){
            if (rollCounter < this.LAST_REGULAR_ROLL) {
                const __ret = this.incrementRegularRoll(scoreLine, i, rollCounter);
                score += __ret.score;
                rollCounter = __ret.rollCounter;
            } else {
                score += this.incrementBonusRoll(scoreLine, i);
            }
            rollCounter++
            i++
        }
        return score
    }

    private incrementBonusRoll(scoreLine: string, i: number) {
        let score = 0
        if (Number.isInteger(+scoreLine[i]))
            score += this.computeRegularScore(scoreLine, i)
        //if (scoreLine[i] === '/')

        if (scoreLine[i] === 'X')
            score += this.MAX_FRAME_SCORE
        return score;
    }

    private incrementRegularRoll(scoreLine: string, i: number, rollCounter: number) {
        let score = 0
        if (Number.isInteger(+scoreLine[i]))
            score += this.computeRegularScore(scoreLine, i)
        if (scoreLine[i] === '/')
            score += this.computeSpare(scoreLine, i)
        if (scoreLine[i] === 'X') {
            score += this.computeStrike(scoreLine, i)
            rollCounter++
        }
        return {score, rollCounter};
    }

    private computeRegularScore(scoreLine: string, i: number): number {
        return +scoreLine[i];
    }

    private computeSpare(scoreLine: string, i: number): number {
        let spareScore: number = 0
        spareScore += this.maximizeScoreToTen(scoreLine, i)
        spareScore += this.nextRollScore(scoreLine, i)
        return spareScore
    }

    private nextRollScore(scoreLine: string, i: number): number {
        if (Number.isInteger(+scoreLine[i + 1]))
            return +scoreLine[i + 1]
        if (scoreLine[i + 1] === '/' ){
            return (Number.isInteger(+scoreLine[i])) ?
                this.MAX_FRAME_SCORE - +scoreLine[i] :
                this.MAX_FRAME_SCORE
        }
        if (scoreLine[i + 1] === 'X')
            return this.MAX_FRAME_SCORE
        return 0
    }

    private maximizeScoreToTen(scoreLine: string, i: number): number {
        if (Number.isInteger(+scoreLine[i - 1]))
            return this.MAX_FRAME_SCORE - +scoreLine[i - 1]
        return this.MAX_FRAME_SCORE
    }

    private computeStrike(scoreLine: string, i: number): number {
        let score: number = 0
        score += this.maximizeScoreToTen(scoreLine, i)
        score += this.nextRollScore(scoreLine, i)
        score += this.nextRollScore(scoreLine, i + 1)
        return score
    }
}