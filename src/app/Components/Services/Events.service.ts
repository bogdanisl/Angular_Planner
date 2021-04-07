import { not } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events:EventModel[] = [
    new EventModel("Andrii Birthday", "...", "29/10/2021", "https://img.freepik.com/free-vector/happy-birthday-with-realistic-balloons-in-soft-colors_1361-3243.jpg?size=626&ext=jpg", true),
    new EventModel("Demo project", "...", "11/11/2021","https://five.epicollect.net/api/internal/media/ec5-demo-project?type=photo&name=logo.jpg&format=project_thumb", false),
    new EventModel("Work with homework", "...", "23/11/2021","https://www.educationcorner.com/images/featured-teacher-help-student-homework.jpg", false),
    new EventModel("Study in STEP", "...", "11/05/2021","https://yt3.ggpht.com/ytc/AAUvwniCrLrdm2czf92k8tmlOVNi041tOKc-5MUdNaPzCQ=s900-c-k-c0x00ffffff-no-rj", false),
  ]


  changeEvents = new EventEmitter<boolean>();


  addEnvet(model: EventModel) {
    this.events.push(new EventModel(model.title, model.description, model.date, model.image));
    this.changeEvents.emit(true);
  }

  getEvents():EventModel[]{
    return this.events;
  }

  changeIsHidden(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isHidden=!this.events[index].isHidden;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  changeIsPriority(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isPriority=!this.events[index].isPriority;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  getVisibleEvents():EventModel[]{
   return  this.events.filter( (obj) => {
      return obj.isHidden===false;
    });
  }

  getHiddenEvents():EventModel[]{
    return  this.events.filter( (obj) => {
       return obj.isHidden===true;
     });
   }


  getEventById(id:string):EventModel{
    return this.events.find(x => x.id == id);
  }

  updateEvent(model:EventModel):Observable<void>{
    const index = this.events.findIndex(item => item.id === model.id);
    this.events[index] = model;
    console.log('updating event: ', model);
    this.changeEvents.emit(true);
    return 
  }
  
constructor() { }

}
