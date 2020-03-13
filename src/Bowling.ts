export class Bowling {
    readonly MAX_FRAME_SCORE = 10

    computeFinalScore(scoreLine: string): number{
        let score: number = 0
        for (let i = 0 ; scoreLine[i] ; i++)
            score = this.incrementWithRollScore(scoreLine, i, score)
        return score
    }

    private incrementWithRollScore(scoreLine: string, i: number, score: number) {
        if (Number.isInteger(+scoreLine[i]))
            score += +scoreLine[i]
        if (scoreLine[i] === '/')
            score = this.computeSpare(scoreLine, i, score)
        if (scoreLine[i] === 'X')
            score += this.MAX_FRAME_SCORE
        return score
    }

    private computeSpare(scoreLine: string, i: number, score: number) {
        score += this.maximizeScoreToTen(scoreLine, i)
        score += this.nextRollScore(scoreLine, i)
        return score
    }

    private nextRollScore(scoreLine: string, i: number) {
        if (Number.isInteger(+scoreLine[i + 1]))
            return +scoreLine[i + 1]
        return 0
    }

    private maximizeScoreToTen(scoreLine: string, i: number) {
        if (Number.isInteger(+scoreLine[i - 1]))
            return this.MAX_FRAME_SCORE - +scoreLine[i - 1]
        return this.MAX_FRAME_SCORE
    }
}