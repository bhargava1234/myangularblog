import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {BlogHttpService } from "../blog-http.service";

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})

export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories= ["comedy","Drama","Action"]
  

  constructor(private _route:ActivatedRoute , private router:Router,public bloghttp:BlogHttpService,public toastr: ToastsManager, vcr: ViewContainerRef) { 

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


  }


  public editBlog(): any{
	  
	  
	  
	  
	   this.bloghttp.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
	   
		 data=>{
			 console.log("Blog Created");
			 console.log(data);
			 this.toastr.success('Blog Edited successfully', 'Success!');
			
			  setTimeout(() =>{
				this.router.navigate(['/blog',this.currentBlog.blogId]) 
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


}
