import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  DisplayFun(){
    if(isNull(sessionStorage.getItem('Userdetails'))) {
      document.write('Empty');

    }else{
      let obj=JSON.parse(sessionStorage.getItem('Userdetails'));
      document.write(JSON.stringify(obj['theTeam']));
    }
  }

}
