import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllchaptersComponent } from './allchapters/allchapters.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChapterComponent } from './chapter/chapter.component';
import { VersesComponent } from './verses/verses.component';
import { NearbytempleComponent } from './nearbytemple/nearbytemple.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllchaptersComponent,
    FooterComponent,
    HeaderComponent,
    ChapterComponent,
    VersesComponent,
    NearbytempleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
