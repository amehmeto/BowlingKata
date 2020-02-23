import {GreaterService, Person} from "./person"

const person: Person = {
    firstName: 'Guillaume',
    lastName: 'EHRET'
}
console.log(new GreaterService().great(person))