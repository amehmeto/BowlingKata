import {GreaterService, Person} from "./person"

describe('Test person.ts', () => {
    let service: GreaterService

    beforeEach(() => service = new GreaterService())

    it('should say Hi', () => {
        const person: Person = {
            firstName: 'Guillaume',
            lastName: 'ERHET'
        }
        expect(service.great(person)).toBe('Hi, Guillaume ERHET')
    })
})