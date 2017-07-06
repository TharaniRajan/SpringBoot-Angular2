import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Screen_200engComponent } from './screen_200eng.component';
import { Screen_250engComponent } from './screen_250eng.component';
import { Screen_350engComponent } from './screen_350eng.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';
import { TestAngularService } from './testangular.service';

@NgModule({
    declarations: [
        Screen_200engComponent,
        Screen_250engComponent,
        Screen_350engComponent
    ],
    imports: [
        FormsModule,
        AgGridModule.withComponents([]),
        CommonModule,
        AccordionModule.forRoot(),
        RouterModule.forChild([
            { path: 'Screen_200eng', component: Screen_200engComponent},
            { path: 'Screen_250eng', component: Screen_250engComponent},
            { path: 'Screen_350eng', component: Screen_350engComponent}
        ]),
        Ng2Bs3ModalModule
    ],
    providers:[
        TestAngularService
    ]
})

export class TestAngularModule {

}