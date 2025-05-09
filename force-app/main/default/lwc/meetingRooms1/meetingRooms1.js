import { LightningElement, track } from 'lwc';

export default class MeetingRooms1 extends LightningElement {

    @track selectedMeetingRoom;

    meetingRoomsInfo = [
        {roomName:'A-01', roomCapacity:'12'},
        {roomName:'A-02', roomCapacity:'16'},
        {roomName:'A-03', roomCapacity:'12'},
        {roomName:'B-01', roomCapacity:'5'},
        {roomName:'B-02', roomCapacity:'8'},
        {roomName:'B-03', roomCapacity:'10'},
        {roomName:'C-01', roomCapacity:'20'}

    ];

    // 1st way may ontileclick may event ko pass karna hay onTileselectHandler jo kay yaha define karin gay ya 1st way hay
    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail; //details say payload lia ta kay meeting room ki info ay
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
        // jo info chiay vo ais track may say lia 
    }

    // 2nd wat by constructor may event ko pass karna hay

    constructor(){
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
        
    }
}