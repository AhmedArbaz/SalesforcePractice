import { LightningElement, track } from 'lwc';

export default class Public_and_Private_Properties extends LightningElement {
    cardTitle = 'BMI calculator';

    // weight;
    // height;

    // bmi;

    // // onclickhandler(event){
    // //     this.cardTitle = 'changed value';
    // //     console.log('value', this.cardTitle);

    // // }

    // onWeightChange(event){
    //     this.weight =parseFloat(event.target.value); // parseFloat is used to convert string to numberevent.target.value);
    // }

    // onHeightChange(event){
    //     this.height = parseFloat(event.target.value); // event.target.value;
    // }

    // calculateBMI(){
    //     this.bmi = this.weight / (this.height * this.height);
    // }


    // NOTE: ham nay ya banai auper @track ki need nahi thi Q kay vo variables thay but ais may need ho gi Q kay arrays, object, DML, DDL may @track use ho ga (console may to changes hon gi lakin ui pay nazar nahi ay ga)

    // So ham @track use karin gay jo premitive datatypes nahi hay aun pay use ho ga

    @ track bmiData = {
         weight: 0,
        height: 0,
        result: 0
    }

    onWeightChange(event){
        this.bmiData.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.bmiData.height = parseFloat(event.target.value);
    }


    calculateBMI(){
        try {
            this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
        } catch (error) {
            this.bmiData.result = undefined;
        }
    }

 
}
