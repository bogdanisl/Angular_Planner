import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../Services/Events.service';
@Component({
  selector: 'AddNewEvent',
  templateUrl: './AddNewEvent.component.html',
  styleUrls: ['./AddNewEvent.component.css']
})
export class AddNewEventComponent implements OnInit {

  model = new EventModel();
  errorMessage: string;
  constructor(private eventsService: EventsService, private spinner:NgxSpinnerService, private notifier:NotifierService) { }

  onSubmit(form: NgForm){
    this.spinner.show()
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.eventsService.addEnvet(this.model);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.notifier.notify('success','Event successfully added!')
      }, 2000);
      form.resetForm();
    }
    else{

      setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.notifier.notify('error','Fill all fields!');
    }, 2000);
    }
  }

  ngOnInit() {
  }

}
