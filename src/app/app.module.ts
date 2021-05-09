import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { HttpClientModule } from '@angular/common/http';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryCardComponent,
    HorizontalScrollDirective
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
