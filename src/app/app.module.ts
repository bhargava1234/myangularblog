import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';


import { HttpClientModule } from '@angular/common/http';
import{ BlogHttpService} from "./blog-http.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
	BrowserAnimationsModule,
	ToastModule.forRoot(),
	RouterModule.forRoot([
	{path:'home',component:HomeComponent},
	{path:'blog/:blogId',component:BlogViewComponent},
	{path:'create',component:BlogCreateComponent},
	{path:'edit/:blogId',component:BlogEditComponent}
   ])
  ],
  providers: [BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
