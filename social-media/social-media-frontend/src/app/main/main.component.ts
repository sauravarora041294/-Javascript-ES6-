import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AjaxService} from '../../services/ajax.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public fg: FormGroup;
  public userData;
  public currentItem = {
    name: '',
    age: null,
    profession: '',
    address: ''
  }
  professionArr = [
    {
    text: 'Student',
    value: 'student'
  },
    {
      text: 'Doctor',
      value: 'doctor'
    },
    {
      text: 'Lawyer',
      value: 'lawyer'
    },
    {
      text: 'Professor',
      value: 'professor'
    },
  ];

  constructor(public httpService: AjaxService) { }

  ngOnInit() {
    this.createFormGroup();
    this.getUsers();
  }

  public createFormGroup() {
    let id;
    if (this.currentItem['_id']) {
      id = this.currentItem['_id'];
    }
    this.fg = new FormGroup({
      // _id: id,
      firstname: new FormControl(this.currentItem['name']),
      lastname: new FormControl(this.currentItem['name']),
      gender: new FormControl('male'),
      profession: new FormControl(this.currentItem['profession']),
      address: new FormControl(this.currentItem['address']),
      age: new FormControl(this.currentItem['age'])
    });
  }

  public updateFormData(data) {
    this.currentItem = data;
    this.createFormGroup();
  }

  public submit(data) {
    let user = data.controls;
    if (user._id) {
      this.currentItem['_id'] = user._id.value;
    }
     this.currentItem['name'] = user.firstname.value;
     this.currentItem['profession'] = user.profession.value;
     this.currentItem['address'] = user.address.value;
     this.currentItem['age'] = +(user.age.value);
     if (this.currentItem['_id']) {
       this.httpService.updateUser(this.currentItem['_id'], this.currentItem).subscribe((res) => {
         console.log(res);
         this.getUsers();
       });
     } else {
       this.httpService.createUser(this.currentItem).subscribe((res) => {
         console.log(res);
         this.getUsers();
       });
     }

    this.fg.reset();
  }


  public getUsers(currentItem?: FormGroup, status?: boolean) {
    this.httpService.getUsers().subscribe((data) => {
      this.userData = data['data'];
      console.log(this.userData);
    });
  }

}
