import { Component, OnInit } from '@angular/core';

import {BlogHttpService } from "../blog-http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 public allBlogs=[];
  
  constructor(public bloghttp:BlogHttpService) {


  }

  
  
  
  ngOnInit() {
	  
	  
	    this.allBlogs=this.bloghttp.getAllblogs().subscribe(
	   
		 data=>{
			 //console.log(data);
			 this.allBlogs=data["data"];
		  },
		  error => {
		   console.log("some error occured");
		   console.log(error.errorMessage);

		  }	  
	   
	   )  
	  
	  //console.log( this.allBlogs);
	  
	 //this.allBlogs =this.blogHttpService.getAllblogs();
  }

}
