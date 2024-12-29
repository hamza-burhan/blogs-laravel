import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  users: any = [];
  test:any;
  selectedFile: any;
  page: number = 1;
  constructor(private api: ApiService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let params = new HttpParams()
    .set('page', '1')
    .set('per_page', '1');

    this.api.get('test', params ).subscribe({
      next: (data:any) => {

        console.log('data: ', data);
        this.users = data.user.data
      },
      error: (err) => {
        console.log('err: ', err);
        
      }
    })
    this.api.get('test').subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.test = JSON.stringify(data)
      },
      error: (err) => {
        console.log('err: ', err);
      }
    })
  }

  nextfun(){
    this.page += 1;
    let params = new HttpParams()
    .set('page', this.page.toString())
    .set('per_page', '1');

    this.api.get('test', params ).subscribe({
      next: (data:any) => {

        console.log('data: ', data);
        this.users = data.user.data
      },
      error: (err) => {
        console.log('err: ', err);
        
      }
    })
  }

}
