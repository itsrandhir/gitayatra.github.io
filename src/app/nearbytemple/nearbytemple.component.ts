import { Component } from '@angular/core';

@Component({
  selector: 'app-nearbytemple',
  templateUrl: './nearbytemple.component.html',
  styleUrl: './nearbytemple.component.css'
})
export class NearbytempleComponent {
  myCoordinates = "test"
  lng:any = ""
  lat:any = ""
  getPosition():Promise<any>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp =>{
        resolve({lng:resp.coords.longitude, lat:resp.coords.latitude})
        this.lng = resp.coords.longitude
        this.lat = resp.coords.latitude
        console.log(this.lat)
        console.log(this.lng)
      },
      err =>{
        reject(err);
      });
    });
  }
  ngOnInit(){
    this.getPosition()
    // console.log(this.lat);
  }

}
