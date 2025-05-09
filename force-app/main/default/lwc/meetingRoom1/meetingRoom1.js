import { LightningElement, api } from 'lwc';

export default class MeetingRoom1 extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;

    // room vali file may lagaya onclick define kia aus ko yaha 
    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo, bubbles :true});
        // tileclick ham nay yaha name dia hay aur ais name ko parent may use karin gay as ontileclick kar kay sath may payload dia jata hay jo ham nay detail may store kara dia 

        // Ab event ban gaya hay ab ais ko fire karna hay parent may by dispatchEvent say

        this.dispatchEvent(tileClicked); //ya dispatchEvent kiya hai jo parent may jaye ga
    }
}