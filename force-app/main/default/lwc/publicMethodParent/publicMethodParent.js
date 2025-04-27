import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value;

    checkBoxSelectHandler(){
        const childComponent = this.template.querySelector('c-public-method-child')

        const returnedMessage = childComponent.selectCheckBox(this.value);
        console.log('Returned Value: ',returnedMessage);
    } 

    // ya ham nay input ko bhi track kar lia hay html to js

    oninputChangeHandler(event){
        this.value = event.target.value;
    }
}