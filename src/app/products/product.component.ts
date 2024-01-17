import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `<li *ngFor="let dept of departments">
            {{dept}}</li>`
})
export class ProductComponent{
    departments = [
        'Mountain Bicylces','Road bikes','Hybrid bikes','Bike pumps'
    ]
}