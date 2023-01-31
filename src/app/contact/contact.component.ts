import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  form=new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
get control():any{
  return this.form.get('name'||'')
}

  ngOnInit(): void {
  }
onSubmit(){
  this.form.valid
  console.log(this.form.value )
}
}
