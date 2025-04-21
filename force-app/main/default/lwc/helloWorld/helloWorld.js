import { LightningElement} from 'lwc';

export default class HelloWorld extends LightningElement {
    // dynamicallGreeting = 'World';
    // Asy var may stor kar kay ap html may {} use kar kay variable ka name do 
    // Ex: <h1>Hello {dynamicallGreeting}!</h1> 

    // But ager hamin user kay input say karna hay to kasay karin gay 1st html may input bano

    dynamicallGreeting = 'World';
    // Ab property trackable hay

    greetingchangemethod(event){
        // event.target.value; input ko lay ga aur change karay ga
         this.dynamicallGreeting = event.target.value; 
    }
}
 