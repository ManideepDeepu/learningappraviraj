import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DepartmentComponent } from './department/department.component';
import { appRouterModule } from "./routes";
import { DepartmentformComponent } from './departmentform/departmentform.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DepartmentComponent,
    DepartmentformComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
