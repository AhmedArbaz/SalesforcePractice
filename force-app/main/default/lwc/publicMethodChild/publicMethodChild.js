import { LightningElement, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    value = ['red'];

    options = [
        { label: 'red Ross markup', value: 'red' },
        { label: 'Blue markup', value: 'blue' },
        { label: 'Green markup', value: 'green' },
        { label: 'Cyan markup', value: 'cyan' },
        { label: 'Black markup', value: 'black' },
    ]; 

    // get options() { 
    //     return [
    //         { label: 'red Ross markup', value: 'red' },
    //         { label: 'Blue markup', value: 'blue' },
    //         { label: 'Green markup', value: 'green' },
    //         { label: 'Cyan markup', value: 'cyan' },
    //         { label: 'Black markup', value: 'black' },
    //     ];
    // }

@api
    selectCheckBox(checkboxValue){
        const selectedCheckBox = this.options.find(checkbox =>{
            return checkboxValue === checkbox.value;
        })
        // The find method returns the first element in which the provided function returns true.
        if(selectedCheckBox){
            this.value = selectedCheckBox;
            return "susscessfully checked"
        }
            return "No checkbox found"
        
    }

    // ya ham nay child component bana lia jis may options ka array hay aus ki values ko check karny kay liay ak function banaya hay jo kay value match kary ga parent say anay vali value ko

}