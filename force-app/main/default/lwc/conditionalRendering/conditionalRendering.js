import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    displayDiv = false;

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

     cityList = [
        'Mumbai',
        'Pune',
        'Bangalore',
        'Delhi',
        'Chennai',
        'Kolkata',
        'Hyderabad',
        'Indore',
        'Kanpur',
        'Lucknow',]
} 