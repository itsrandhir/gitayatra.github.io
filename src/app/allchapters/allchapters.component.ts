import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-allchapters',
  templateUrl: './allchapters.component.html',
  styleUrl: './allchapters.component.css'
})
export class AllchaptersComponent implements OnInit {

  url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/';
  chapters:any = [];
  temp_res:any = [];
  headers = new HttpHeaders()
  .set('content-type','application/json')
  .set('X-RapidAPI-Host', 'bhagavad-gita3.p.rapidapi.com')
  .set('X-RapidAPI-Key','32ab94c1c7msha58ddab2d05aa32p1afad6jsne58914a29a3f')
  
  constructor(private http: HttpClient) {}
  getData(){
    if(localStorage.getItem('chapters') == null){
      this.http.get<any>(
        this.url, {headers: this.headers}).subscribe(data=>{
          this.temp_res = data;
          localStorage.setItem('chapters', JSON.stringify(data));
          this.chapters = this.temp_res;
        });
    }
    let array_data = localStorage.getItem('chapters');
    this.chapters = array_data ? JSON.parse(array_data) : this.temp_res;
    return this.chapters;
  }
  ngOnInit(): void {
    this.getData() 
  }
}
