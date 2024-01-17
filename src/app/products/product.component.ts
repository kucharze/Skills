import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `<li *ngFor="let dept of departments">
            {{dept}}</li>
            <li *ngFor = 'let employee og employees'>
                {{employee.name}}
            </li>`,
    styles: ['li {color: green; margin-top: 10px}']
})
export class ProductComponent{
    departments = [
        'Mountain Bicylces','Road bikes','Hybrid bikes','Bike pumps'
    ]
    employees = [
        {
            name:'Axle',
            employeeId: 1234,
            department:'IT'
        },
        {
            name:'Jean',
            employeeId: 1235,
            department:'Finance'
        },
        {
            name:'Barb',
            employeeId: 1236,
            department:'IT'
        },
    ]
}