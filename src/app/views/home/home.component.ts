import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  users: any = [];
  test:any;
  selectedFile: any;
  constructor(private api: ApiService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.api.get('user').subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.users = data
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





  //eexample of file upload
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
        this.uploadFile(this.selectedFile);
        console.log('this.selectedFile: ', this.selectedFile);
    }
}

uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);  // Ensure 'file' is the key used here

    this.api.post('test', formData).subscribe({
        next: (data: any) => {
            console.log('data: ', data);
            this.test = data.file_url
            // this.test = JSON.stringify(data);
        },
        error: (err) => {
            console.log('err: ', err);
        }
    });
}

}
