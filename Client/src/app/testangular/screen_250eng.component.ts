import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TestAngularService } from './testangular.service';
import { GridOptions } from 'ag-grid';
import { ITestAngular } from './testangular';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_250eng.component.html'
})
export class Screen_250engComponent implements OnInit {
  private Table_252GridOptions: GridOptions;

  private testangular: ITestAngular = {
  	id: 0,
  	name: '',	address: ''
  }
  ;

  private array_TestAngular: ITestAngular[] = [];

  constructor(private router: Router, private testangularservice: TestAngularService) { 
    this.Table_252GridOptions = {
    	columnDefs: [
    		{
    			headerName: "Name",
    			field: "name",
    		}
    	],

    	rowData : [],
    	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
  }


  search_TestAngular(){
      this.testangularservice.search_TestAngular(this.testangular)
          .subscribe(data => {
            console.log("data", data);
            this.array_TestAngular = data
          });
  }

}