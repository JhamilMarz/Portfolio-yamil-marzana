import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
const Typewriter = require('t-writer.js')
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle')
  asTitle!: ElementRef;
  links: Array<LinkModel> = [
    {
      link: 'https://www.youtube.com/watch?v=-xXfelCzAi4&t=4222s&ab_channel=LeiferMendez',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: 'ymlmarz0610@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
    {
      link: 'https://www.youtube.com/watch?v=-xXfelCzAi4&t=4222s&ab_channel=LeiferMendez',
      icon: '<i class="uil uil-linkedin"></i>'
    }
  ]
  constructor() { }
  ngAfterViewInit(): void {
    this.initEffect()
  }
  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    })
    writer
      .changeCursorColor('white')
      .type('Yamil Marzana')
      .rest(50000)
      .start();
  }

  ngOnInit(): void {
  }

}

class LinkModel {
  link!: string;
  icon!: string;
}