import { Component,  EventEmitter,  OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links=[{icon:'uil uil-estate', name:'Home', router:'home'},
  {icon:'uil uil-user-square',name: 'About', router:'about-me'}, 
  {icon:'uil uil-book-alt',name: 'Projects', router:'works'},
  {icon:'uil uil-comments', name: 'Contact', router:'contact'}]
  @Output() eventHeader: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  scrollLink(router: string){
    this.eventHeader.emit(router)
  }

}
