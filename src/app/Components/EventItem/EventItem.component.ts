import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../Services/Events.service';

@Component({
  selector: 'EventItem',
  templateUrl: './EventItem.component.html',
  styleUrls: ['./EventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService: EventsService, private spinner:NgxSpinnerService, private notifier:NotifierService) { }
  @Input() myEvent: EventModel;
  // isPriority: boolean = false;
  // isHidden: boolean = false;
  ngOnInit() {
  }

  changePriority(): void {
    // this.myEvent.isPriority != this.myEvent.isPriority;
    this.eventsService.changeIsPriority(this.myEvent.id)
    // this.isPriority = !this.isPriority;
  }

  changeIsHidden(): void{
    this.eventsService.changeIsHidden(this.myEvent.id);
  }

  modal():void{
    this.isModalVisible=true;
  }

  addNote():void{

  }


  errorMessage: string;
  isModalVisible: boolean = false;

  onSubmit(form: NgForm){
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.notifier.notify('info','This button not working:(')
    }, 2000);
  }
  
}
