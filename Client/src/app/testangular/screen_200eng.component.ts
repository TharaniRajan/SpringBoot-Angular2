import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TestAngularService } from './testangular.service';
import { ITestAngular } from './testangular';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_200eng.component.html'
})
export class Screen_200engComponent implements OnInit {
  private testangular: ITestAngular = {
  	id: 0,
  	name: '',	address: ''
  }
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private router: Router, private testangularservice: TestAngularService) { 
  }

  ngOnInit() {
    if(!this.testangular.id)
    	this.mymodalSFU.open();


  }


  create_TestAngular(){
      this.testangularservice.create_TestAngular(this.testangular)
          .subscribe(data => {
            console.log("data", data);
          });
  }
  update_TestAngular(){
      this.testangularservice.update_TestAngular(this.testangular)
          .subscribe(data => {
            console.log("data", data);
          });
  }
  search_for_update_TestAngular(){
      this.mymodalSFU.close();
      this.testangularservice.search_for_update_TestAngular(this.testangular.id)
          .subscribe(data => {
            console.log("data", data);
            this.testangular = data
          });
  }
  delete_TestAngular(){
      this.testangularservice.delete_TestAngular(this.testangular)
          .subscribe(data => {
            console.log("data", data);
          });
  }

}