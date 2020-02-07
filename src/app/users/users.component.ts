import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { isNull } from 'util';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  profileForm: FormGroup;
  UserDetails: any;
  key:number;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.minLength(3)],
      lastName: [''],
      DOB: [''],
      salary: [''],
    });
  }
  onSubmit() {
    console.log(this.profileForm.value);
    if(isNull(sessionStorage.getItem('Userdetails'))) {
      let obj={"theTeam":[]};
      obj['theTeam'].push(this.profileForm.value);
      sessionStorage.setItem('Userdetails', JSON.stringify(obj));
      } else {
        let obj=JSON.parse(sessionStorage.getItem('Userdetails'));
        obj['theTeam'].push(this.profileForm.value);
        sessionStorage.setItem('Userdetails',JSON.stringify(obj));
    }
    this.profileForm.reset();
  }
}