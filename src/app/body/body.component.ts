import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(section: string) {
    let sectionScroll = document.getElementById(section)
    sectionScroll?.scrollIntoView({behavior: 'smooth'});
  }
}
