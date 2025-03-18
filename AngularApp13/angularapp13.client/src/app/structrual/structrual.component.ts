import { Component } from '@angular/core';

@Component({
  selector: 'app-structrual',
  templateUrl: './structrual.component.html',
  styleUrl: './structrual.component.css'
})
export class StructrualComponent {
  //  declare variable in ts of component 
  display: boolean = false

  users = [
    { id: 1, name: "anas" },
    {id : 2 , name : "bilal"},
    {id : 3 , name : "ayman"}

  ]


  color = 'blue'
}
