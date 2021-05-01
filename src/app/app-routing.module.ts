import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './pages/stories/stories.component';

const routes: Routes = [
  { path: 'stories', component: StoriesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'stories' },
  { path:'**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
