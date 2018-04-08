import { Injectable } from '@angular/core';

import{HttpClient,HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogHttpService {

	blogDelete(arg0: any): any {
		throw new Error("Method not implemented.");
	}
	delete(arg0: any): any {
		throw new Error("Method not implemented.");
	}
  public allBlogs;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  
  constructor(private _http:HttpClient) { 
  console.log("blog http service");
  
  }
   
   public getAllblogs():any{
   
	   let myResponse=this._http.get(this.baseUrl+'/all?authToken=ZDE1ZDFlNjE0MGM0MmYzZGU1OTRjNzhiZjliNDhlYThjNmRiZjcwNWI0ZDhiY2MwZDc2MDY2Mjg5YTkwYTk2MDU4ZTgyYzcwZGU2NThhM2VjZGMxNmNlYzJlODVlMzEzNGRjNGZkZGFiYmJiMTc2YjYwN2Y5ODU1ZWZjZjA1OTU2ZjMx');
	   //console.log(myResponse);
	   return myResponse;
   
   
  } 
   
    public getBlog(BlogId):any{
   
	   let myResponse=this._http.get(this.baseUrl+'/view/'+BlogId+'?authToken=ZDE1ZDFlNjE0MGM0MmYzZGU1OTRjNzhiZjliNDhlYThjNmRiZjcwNWI0ZDhiY2MwZDc2MDY2Mjg5YTkwYTk2MDU4ZTgyYzcwZGU2NThhM2VjZGMxNmNlYzJlODVlMzEzNGRjNGZkZGFiYmJiMTc2YjYwN2Y5ODU1ZWZjZjA1OTU2ZjMx');
	  // console.log(myResponse);
	   return myResponse;
   } 
   
    public createBlog(blogdata):any{
   
	   let myResponse=this._http.post(this.baseUrl+'/create/?authToken=ZDE1ZDFlNjE0MGM0MmYzZGU1OTRjNzhiZjliNDhlYThjNmRiZjcwNWI0ZDhiY2MwZDc2MDY2Mjg5YTkwYTk2MDU4ZTgyYzcwZGU2NThhM2VjZGMxNmNlYzJlODVlMzEzNGRjNGZkZGFiYmJiMTc2YjYwN2Y5ODU1ZWZjZjA1OTU2ZjMx',blogdata);
	  // console.log(myResponse);
	   return myResponse;
   } 
   
   
   public deleteBlog(BlogId):any{
   
     let data={};
	   let myResponse=this._http.post(this.baseUrl+'/'+BlogId+'/delete/?authToken=ZDE1ZDFlNjE0MGM0MmYzZGU1OTRjNzhiZjliNDhlYThjNmRiZjcwNWI0ZDhiY2MwZDc2MDY2Mjg5YTkwYTk2MDU4ZTgyYzcwZGU2NThhM2VjZGMxNmNlYzJlODVlMzEzNGRjNGZkZGFiYmJiMTc2YjYwN2Y5ODU1ZWZjZjA1OTU2ZjMx',data);
	  // console.log(myResponse);
	   return myResponse;
   } 

   public editBlog(BlogId,blogdata):any{
   
    let myResponse=this._http.put(this.baseUrl+'/'+BlogId+'/edit/?authToken=ZDE1ZDFlNjE0MGM0MmYzZGU1OTRjNzhiZjliNDhlYThjNmRiZjcwNWI0ZDhiY2MwZDc2MDY2Mjg5YTkwYTk2MDU4ZTgyYzcwZGU2NThhM2VjZGMxNmNlYzJlODVlMzEzNGRjNGZkZGFiYmJiMTc2YjYwN2Y5ODU1ZWZjZjA1OTU2ZjMx',blogdata);
   // console.log(myResponse);
    return myResponse;
  } 
   
}
