import { LightningElement } from 'lwc';

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

    bmiData = {
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
