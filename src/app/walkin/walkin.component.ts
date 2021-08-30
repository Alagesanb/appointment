import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-walkin',
  templateUrl: './walkin.component.html',
  styleUrls: ['./walkin.component.css']
})
export class WalkinComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private http: HttpClient ,private fb: FormBuilder, private router: Router,) { 
    this.createForm();
   }
  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      patient: new FormControl('', [Validators.required,]),
      contact: new FormControl('', [Validators.required, ]),
      appointment: new FormControl('', [Validators.required, ]),
      wanted: new FormControl('', [Validators.required, ]),
    });
  }
  get f() { return this.form.controls; }

  addPatient(){
    this.submitted = true;
  

    if (this.form.invalid) {
      console.log(this.form.value);
      console.log("iii")
      return;
    }

    console.log(this.form.value );
    this.http.post<any>(`${this.url}/AddOwner`,  this.form.value   ).subscribe(data => {

    }, err => {
          console.log(err);
        })

  }

}
