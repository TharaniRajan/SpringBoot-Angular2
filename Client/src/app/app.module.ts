import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { TestAngularModule } from './testangular/testangular.module';
import { HeaderENComponent } from './header/header-en.component';
import { FooterENComponent } from './footer/footer-en.component';
import { HomeENComponent } from './home/home-en.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
TestAngularModule
  ],
  providers: [
    SharedService
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
FooterENComponent,
HomeENComponent
  ],
  entryComponents: [
    HeaderENComponent,
    FooterENComponent,
    HomeENComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }