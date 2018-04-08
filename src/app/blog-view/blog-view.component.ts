import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {BlogHttpService } from "../blog-http.service";

import { ToastsManager } from 'ng2-toastr/ng2-toastr';


import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
	
  constructor(private _route:ActivatedRoute , private router:Router,public bloghttp:BlogHttpService,public toastr: ToastsManager, vcr: ViewContainerRef,private location:Location) {
  
	this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
	 
     let myBlogId=this._route.snapshot.paramMap.get('blogId');	 
	  console.log(myBlogId);
	  
	   this.currentBlog=this.bloghttp.getBlog(myBlogId).subscribe(
	   
		 data=>{
			 //console.log(data);
			 this.currentBlog=data["data"];
		  },
		  error => {
		   console.log("some error occured");
		   console.log(error.errorMessage);

		  }	  
	   
	   )
	  //console.log(this.currentBlog);
	  
  }

  public deleteThisBlog(): any{
	
	let myBlogId=this._route.snapshot.paramMap.get('blogId');	 
	console.log(myBlogId);

	 this.bloghttp.deleteBlog(myBlogId).subscribe(
	 
	   data=>{
		   
		 
		   this.toastr.success('Blog Delete successfully', 'Success!');
		  
			setTimeout(() =>{
			  this.router.navigate(['/home']) 
		   },2000)  
		},
		error => {
		 console.log("some error occured");
		 console.log(error.errorMessage);
		 //alert('');
		 this.toastr.error('some error occured', 'Oops!');

		}	  
	 
	 )

	 
}	
  
public goBackToPreviousPage():any{

this.location.back();



}


}
