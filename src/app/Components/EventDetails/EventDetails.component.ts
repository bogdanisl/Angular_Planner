import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../Services/Events.service';

@Component({
  selector: 'EventDetails',
  templateUrl: './EventDetails.component.html',
  styleUrls: ['./EventDetails.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId!: string;

  model!: EventModel;


  constructor(private route: ActivatedRoute, private eventsService: EventsService, private spinner:NgxSpinnerService, private notifier:NotifierService) { }


  onSubmit(form: NgForm){
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.notifier.notify('info','This button not working:(')
    }, 2000);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
    })
    this.model = this.eventsService.getEventById(this.eventId);
  }
}
