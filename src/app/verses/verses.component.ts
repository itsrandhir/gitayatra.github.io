import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrl: './verses.component.css'
})
export class VersesComponent {
  chapterId: any = ''
  versesId:any = ''
  versesDetail:any = []
  url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/'

  headers = new HttpHeaders()
  .set('content-type','application/json')
  .set('X-RapidAPI-Host', 'bhagavad-gita3.p.rapidapi.com')
  .set('X-RapidAPI-Key','32ab94c1c7msha58ddab2d05aa32p1afad6jsne58914a29a3f')

  constructor(private route: ActivatedRoute, private http: HttpClient){}

  fetchVersesDetail(chapter:any,verses:any){
    this.http.get<any>(
      (this.url+chapter+'/verses/'+verses+'/'), {headers: this.headers}).subscribe(data=>{
        this.versesDetail = data;
        return this.versesDetail;
      });
  }
  ngOnInit(){
    this.chapterId = this.route.snapshot.url[1].path;
    this.versesId = this.route.snapshot.url[3].path;

    this.fetchVersesDetail(this.chapterId, this.versesId)
  }
}
