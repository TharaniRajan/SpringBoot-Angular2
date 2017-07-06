import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TestAngularService } from './testangular.service';
import { ITestAngular } from './testangular';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_350eng.component.html'
})
export class Screen_350engComponent implements OnInit {
  private testangular: ITestAngular = {
  	id: 0,
  	name: '',	address: ''
  }
  ;

  constructor(private router: Router, private testangularservice: TestAngularService) { 
  }

  ngOnInit() {
  }


  get_all_TestAngular(){
      this.testangularservice.get_all_TestAngular()
          .subscribe(data => {
            console.log("data", data);
          });
  }

}