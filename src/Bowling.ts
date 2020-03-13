export class Bowling {
    readonly MAX_FRAME_SCORE = 10

    computeScore(scoreLine: string): number{
        let score: number = 0
        for (let i = 0 ; scoreLine[i] ; i++){
            if (!isNaN(+scoreLine[i]))
                score += +scoreLine[i]
            if (scoreLine[i] === '/')
                score = this.computeSpare(scoreLine, i, score)
            if (scoreLine[i] === 'X')
                score += this.MAX_FRAME_SCORE
        }
        return score
    }

    private computeSpare(scoreLine: string, i: number, score: number) {
        if (Number.isInteger(+scoreLine[i + 1])) {
            score += this.maximizeScoreToTen(scoreLine, i)
            score += +scoreLine[i + 1]
        } else
            score += this.maximizeScoreToTen(scoreLine, i)
        return score
    }

    private maximizeScoreToTen(scoreLine: string, i: number) {
        return this.MAX_FRAME_SCORE - +scoreLine[i - 1]
    }
}