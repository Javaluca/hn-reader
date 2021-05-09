import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';
import { HackerNewsService } from 'src/app/services/hacker-news.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  private _stories: Story[];

  constructor(private readonly hnService: HackerNewsService) { }

  ngOnInit(): void {
    this.hnService.topStories().subscribe(stories => this._stories = stories);
  }

  get stories(): Story[] {
    if (!this._stories) {
      return [];
    }
    return this._stories;
  }

}
