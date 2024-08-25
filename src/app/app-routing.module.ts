import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllchaptersComponent } from './allchapters/allchapters.component';
import { ChapterComponent } from './chapter/chapter.component';
import { VersesComponent } from './verses/verses.component';
import { NearbytempleComponent } from './nearbytemple/nearbytemple.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter', component: AllchaptersComponent},
  {path: 'chapter/:id', component: ChapterComponent},
  {path: 'chapter/:id/verses/:vid', component: VersesComponent},
  {path: 'nearby-temples', component: NearbytempleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
