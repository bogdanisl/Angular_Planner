import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plannerApp';
  name:string=" Bohdan";
  age:number = 17;
  isCheck:boolean = true;
}
