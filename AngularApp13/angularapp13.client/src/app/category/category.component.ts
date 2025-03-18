import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { TestSerService } from '../aymanService/test-ser.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

//1
  constructor(private _ser : TestSerService) { }// inject to service in component 


  //2
  ngOnInit() {

    this.get();
  }

  categoryContainer :any

  dataCategory :any

  //3
  get() {

    this._ser.getData().subscribe((data) => {

      this.dataCategory = data;
    })

  }

}
