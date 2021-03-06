import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  form = this.fb.group({
    name: [null],
    surname: [null],
    address: [null, Validators.required],
    thumbnail: [null],
  });

  constructor(private fb: FormBuilder) {}


}
