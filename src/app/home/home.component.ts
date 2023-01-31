import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
const Typewriter = require('t-writer.js')
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle')
  asTitle!:ElementRef
  links: Array<LinkContactModel> =[
    {
      link:'https://github.com/JhamilMarz',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: 'https://www.linkedin.com/in/yamil-marzana-a060401b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDc1BaSd0TkiOGEwVl2o%2BOQ%3D%3D',
      icon: '<i class="uil uil-linkedin"></i>'
    }
  ]
  pdfSrc: string = "../curriculo.pdf";
  image='../assets/img/cartoon.jpg'
  constructor() { }
  ngAfterViewInit(): void {
    this.initEffect()
  }
  initEffect() {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter (target, {
      loop:true,
      typeColor: 'gray'
    })
    writer
    .changeCursorColor('gray')
    .type('I am Yamil Marzana')
    .rest(50000)
    .start();
  }


  ngOnInit(): void {
   /*  setTimeout(()=>window.scroll({
      top: document.getElementById('Home')?.getBoundingClientRect().top,
      left:0,
      behavior: 'smooth'
    })) */
    console.log('test')
  }

  descargarCV(){
    window.open("https://drive.google.com/file/d/1us0p5M4hiWmHfG4qe1Kdu6yJipRQTGLM/view?usp=sharing","_self")
  }

  openLink(link:string){
    window.open(link,"_blank")
  }

  setNewImage(){
    this.image='../assets/img/cartoon.jpg'
  }

  setOldImage(){
    this.image='../assets/img/photo.jpg'
  }
}

class LinkContactModel {
  link !: string;
  icon !: string;
}