import { LightningElement } from 'lwc';

export default class SimpleCalcultorProject extends LightningElement {
    currentResult;
    firstNumber;
    secondNumber;
    previousResult = []; // ais may saray inputs ki previous things add hoti jain gi array may

    showPerResult = false
    numberChangeHandler(event){
        const inputBoxName= event.target.name;
        // ya ham nay name get kia hay phir nichay condition di hay ager 1st hay to aus ki value lo ager 2nd hay to aus ki value lo

        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value
        }
        else if (inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value
        }

    }

    addHandler(){
        // Ham nay textbox use kia hay jo kay haymasha str data hay to hamin ais ko change karna hota hay to int to typecast kar dia
    
        const firstN = parseInt(this.firstNumber)
        const secondN = parseInt(this.secondNumber)
    
        // this.currentResult = "Result of " + firstN +'+'+ ' is ' + (firstN+secondN)
    
        // same work 
    
        this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`
        
        this.previousResult.push(this.currentResult)
        // ya current result ko array may push karta jay ga
    }

    // subtract handler
    subHandler(){
    
        const firstN = parseInt(this.firstNumber)
        const secondN = parseInt(this.secondNumber)
    
    
        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`
        this.previousResult.push(this.currentResult)
        // ya current result ko array may push karta jay ga
    }
    multiplayHandler(){
      
    
        const firstN = parseInt(this.firstNumber)
        const secondN = parseInt(this.secondNumber)
    
        this.currentResult = `Result of ${firstN} x ${secondN} is ${firstN*secondN}`
        this.previousResult.push(this.currentResult)
        // ya current result ko array may push karta jay ga
    }
    dividsionHandler(){
 
        const firstN = parseInt(this.firstNumber)
        const secondN = parseInt(this.secondNumber)
    
        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN/secondN}`
        this.previousResult.push(this.currentResult)
        // ya current result ko array may push karta jay ga
    }



    showPerviousResultToggle(event){
        this.showPerResult = event.target.checked

    }
}