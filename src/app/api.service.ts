import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes this service available application-wide
})
export class ApiService {
  // Default headers
  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {}

  // GET request
  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const httpOptions = { params, headers: headers || this.defaultHeaders };
    return this.http.get<T>(url, httpOptions);
  }

  // POST request
  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const httpOptions = { headers: headers || this.defaultHeaders };
    return this.http.post<T>(url, body, httpOptions);
  }

  // PUT request
  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const httpOptions = { headers: headers || this.defaultHeaders };
    return this.http.put<T>(url, body, httpOptions);
  }

  // PATCH request
  patch<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const httpOptions = { headers: headers || this.defaultHeaders };
    return this.http.patch<T>(url, body, httpOptions);
  }

  // DELETE request
  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const httpOptions = { headers: headers || this.defaultHeaders };
    return this.http.delete<T>(url, httpOptions);
  }

  // Utility to update default headers dynamically
  setDefaultHeaders(headers: { [key: string]: string }): void {
    this.defaultHeaders = new HttpHeaders(headers);
  }
}
