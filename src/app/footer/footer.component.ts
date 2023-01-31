import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
class LinkContactModel {
  link !: string;
  icon !: string;
}