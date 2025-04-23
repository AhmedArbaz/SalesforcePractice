import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    // @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}
    // now ais ki need nahi hay Q kay ham slots use karin gay 
    
    // This is our child component where we make @api in js So values come for this component that we made parent for it 
    // the parent has its file name in cabab case (meeting-room-info)
    // NOTE: we create a component that has parent of this component because we add the name of the class is (meeting-room-info), So it is become the child component and that component become parent of this file to pass data between the two components.
    
        // Public property boolean
        @api showRoomsInfo = false;
}