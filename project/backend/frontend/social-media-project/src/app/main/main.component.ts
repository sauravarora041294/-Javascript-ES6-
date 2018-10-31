import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( public mainService: MainService ) { }

  ngOnInit() {
    console.log(this.mainService.text);
  }

}
