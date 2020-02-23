export interface Person {
    firstName: string
    lastName: string
}

export class GreaterService {
    great(person: Person){
        return `Hi, ${person.firstName} ${person.lastName}`
    }
}