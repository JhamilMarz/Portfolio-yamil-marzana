import { Component, OnInit, ViewChild } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  @ViewChild(BodyComponent)
  body!: BodyComponent;
  constructor() { }

  ngOnInit(): void {
  }

  eventHeader(event:any){
    this.body.scroll(event)
  }
}
