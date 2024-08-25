import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {
  chapterId:any = null;
  chapterDetail:any = [];
  allVerses:any = [];
  url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/';

  urlAllVerses = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/'
  headers = new HttpHeaders()
  .set('content-type','application/json')
  .set('X-RapidAPI-Host', 'bhagavad-gita3.p.rapidapi.com')
  .set('X-RapidAPI-Key','32ab94c1c7msha58ddab2d05aa32p1afad6jsne58914a29a3f')

  constructor(private route: ActivatedRoute, private http: HttpClient){}
  fetchData(id:any){
    this.http.get<any>(
      (this.url+id+'/'), {headers: this.headers}).subscribe(data=>{
        this.chapterDetail = data;
        return this.chapterDetail;
      });
  }
  fetchVerses(id:any){
    this.http.get<any>(
      (this.url+id+'/verses/'), {headers: this.headers}).subscribe(data=>{
        this.allVerses = data;
        return this.allVerses;
      });
  }
  ngOnInit(){
    this.chapterId = this.route.snapshot.url[1].path;
    this.fetchData(this.chapterId)
    this.fetchVerses(this.chapterId)
  }
}
