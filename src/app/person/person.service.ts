import { EventEmitter } from '@angular/core';
import { Person } from './person.model';

export class PersonService {
    personSelected: Person;

    private persons: Person[] = [
        new Person('252090', 'brandon.rana@cityofdenton.com', 'Denton PD', 'Brandon', 'Rana'),
        new Person('252090', 'brandon.rana@gmail.com', 'Denton PD', 'Justin', 'Rana'),
        new Person('252090', 'todd.kidwell@cityofdenton.com', 'Denton PD', 'Todd', 'Kidwell')
    ];

    private possiblePersons: Person[] = [];

    findPossibles(identity: string) {
        this.possiblePersons = [];
        const personByPID = this.persons.filter(
            (p) => {
                return p.identity === identity;
            }
        );
        this.possiblePersons.push(...personByPID);
        const personByEmail = this.persons.filter(
            (p) => {
                return p.email === identity;
            }
        );
        this.possiblePersons.push(...personByEmail);
    }

    getPossibles() {
        return this.possiblePersons.slice();
    }
}
