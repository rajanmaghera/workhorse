import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  saveUser(user){
    return this.http.post('http://localhost:8080/api/saveUser', user).pipe(catchError(this.handleError));
  }
  
  getUser(){
    console.log("I wsa called")
    return this.http.get('http://localhost:8080/api/getUser').pipe(catchError(this.handleError));
  }

  getEmployeeList(){
    console.log("Getting employee list")
    return this.http.get('http://localhost:4000/api/foobarGet').pipe(catchError(this.handleError))
  }


}
