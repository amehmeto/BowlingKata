import { Bowling } from "./bowling"

describe('Bowling kata', () => {
    it.each([
        ['--------------------', 0],
        ['1-------------------', 1],
        ['-------------------1', 1],
        ['33-------444-------1', 19],
        ['9-9-9-9-9-9-9-9-9-9-', 90],
        ['9/------------------', 10],
        ['4/------------------', 10],
        ['0/------------------', 10],
        ['4/2-----------------', 14],
        ['4/7-----------------', 24],
        ['4/72----------------', 26],
        ['4/7/----------------', 27],
        ['4/7/4/--------------', 41],
        ['4/7/4/-1------------', 42],
        ['4/7/4/-/------------', 51],
        ['4/7/4/-/1--/--------', 63],
        ['X-------------------', 10],
        ['X1-----------------', 12],
        ['X3-----------------', 16],
        ['X23---------------', 20],
        ['X23--X-----------', 30],
        ['XX---------------', 30],
        ['XX3---------------', 39],
        ['XXX4-------------', 72],
        ['XXX4-X----------', 82],
        ['XXXXXXXXX--', 240],
        ['XXXXXXXX----', 210],
        ['XX7/XXXXX----', 187],
        ['XX-/XXXXXX--', 210],
        ['XXXXXXXXXXXX', 300],
        ['XXXXXXXXXXX-', 290],
        ['--------------------X1-', 11],
        ['------------------XX1', 21],
        ['--------------------/1', 11],
        ['-------------------3/1', 11],

        ['--------------------', 0],
        ['1-------------------', 1],
        ['-------------------1', 1],
        ['--------1-----------', 1],
        ['1-1-1-1-1-1-1-1-1-1-', 10],
        ['2-------------------', 2],
        ['9-9-9-9-9-9-9-9-9-9-', 90],
        ['X------------------', 10],
        ['XX----------------', 30],
        ['XXXXXXXXXXXX', 300],
        ['5/5/5/5/5/5/5/5/5/5/5', 150],
        ['9/9/9/9/9/9/9/9/9/9/9', 190],
        ['X-/X-/X-/X-/X-/X', 200],

    ])('should return %s when %s', (rawScore: string, computedScore: number) => {
        expect(new Bowling().computeFinalScore(rawScore)).toBe(computedScore)
    })
})


