import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFileComponent } from './student-file/student-file.component';
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { FormsTutorialComponent } from './forms-tutorial/forms-tutorial.component';
import { RaghuComponent } from './raghu/raghu.component';
import { SubjectInterceptor } from './services/subject.interceptor';

@NgModule({
  declarations: [AppComponent, StudentFileComponent, FormsTutorialComponent, RaghuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LoginModule, LoginRoutingModule, ReactiveFormsModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SubjectInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
