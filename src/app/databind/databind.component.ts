import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  username = '';
  allowUserName = false;
  constructor() { 
  }

  ngOnInit() {
  }

  onUpdateUserName(event:Event){
    if((<HTMLInputElement>event.target).value!=''){
      this.allowUserName = true;
    }
    else {
      this.allowUserName = false;
    }
  }
  clearUserField(){
    this.username = '';
    this.allowUserName = false;
  }

}
