export class Bowling {
    readonly MAX_FRAME_SCORE = 10
    readonly LAST_REGULAR_ROLL = 18;

    computeFinalScore(scoreLine: string): number{
        let score: number = 0
        let rollCounter: number = 0

        for (let i = 0 ; scoreLine[i] ; i++){
            score += this.incrementScoreAsPerRoll(rollCounter, scoreLine, i)
            rollCounter += this.incrementRollCounter(rollCounter, scoreLine, i)
        }
        return score
    }

    private incrementRollCounter(rollCounter: number, scoreLine: string, i: number) {
        return (this.isRegularRoll(rollCounter) && this.isStrike(scoreLine, i)) ? 2 : 1
    }

    private incrementScoreAsPerRoll(rollCounter: number, scoreLine: string, i: number) {
        return (this.isRegularRoll(rollCounter)) ?
            this.incrementAsRegularRoll(scoreLine, i) :
            this.incrementAsBonusRoll(scoreLine, i)
    }

    private isRegularRoll(rollCounter: number) {
        return rollCounter < this.LAST_REGULAR_ROLL;
    }

    private isStrike(scoreLine: string, i: number) {
        return scoreLine[i] === 'X';
    }

    private incrementAsBonusRoll(scoreLine: string, i: number) {
        if (Number.isInteger(+scoreLine[i]))
            return this.computeRegularScore(scoreLine, i)
        if (this.isSpare(scoreLine, i))
            return this.maximizeScoreToTen(scoreLine, i)
        if (this.isStrike(scoreLine, i))
            return this.MAX_FRAME_SCORE
        return 0;
    }

    private isSpare(scoreLine: string, i: number) {
        return scoreLine[i] === '/';
    }

    private incrementAsRegularRoll(scoreLine: string, i: number) {
        if (Number.isInteger(+scoreLine[i]))
            return this.computeRegularScore(scoreLine, i)
        if (this.isSpare(scoreLine, i))
            return this.computeSpare(scoreLine, i)
        if (this.isStrike(scoreLine, i))
            return this.computeStrike(scoreLine, i)
        return 0
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
        if (this.isSpare(scoreLine, i + 1))
            return this.maximizeScoreToTen(scoreLine, i + 1)
        if (this.isStrike(scoreLine, i + 1))
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