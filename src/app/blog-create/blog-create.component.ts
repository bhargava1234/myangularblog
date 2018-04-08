import { Component, OnInit,ViewContainerRef } from '@angular/core';

import {BlogHttpService } from "../blog-http.service";
import {ActivatedRoute,Router } from '@angular/router';
 import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories= ["comedy","Drama","Action"]

  constructor(public bloghttp:BlogHttpService,private _route:ActivatedRoute,private router:Router,public toastr: ToastsManager, vcr: ViewContainerRef) { 
   
    this.toastr.setRootViewContainerRef(vcr);
  
   }

  ngOnInit() {
  }
  
  public createBlog(): any{
	  
	  let blogData={
		  
		title:this.blogTitle,
        description:this.blogDescription,
		blogBody:this.blogBodyHtml,
		category:this.blogCategory
         		
      }
	  
	  console.log(blogData);
	   this.bloghttp.createBlog(blogData).subscribe(
	   
		 data=>{
			 console.log("Blog Created");
			 console.log(data);
			 this.toastr.success('Blog Posted successfully', 'Success!');
			
			  setTimeout(() =>{
				this.router.navigate(['/blog',data.data.blogId]) 
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
