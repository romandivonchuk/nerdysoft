import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    log: new FormControl(''),
    pass: new FormControl(''),
  })

  ngOnInit(): void {
  }

  show() {
    console.log(this.form.value)
  }

}
