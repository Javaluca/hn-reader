import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Story } from 'src/app/models/story';
import { HackerNewsService } from 'src/app/services/hacker-news.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  private _stories: Story[];

  private _loading: boolean = true;

  constructor(private readonly hnService: HackerNewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  get loading(): boolean {
    return this._loading || false;
  }

  private loadNews() {
    this._loading = true;
    this.hnService.topStories().subscribe(
      stories => this._stories = stories,
      error => console.log(error),
      () => this._loading = false);
  }

  get stories(): Story[] {
    if (!this._stories) {
      return [];
    }
    return this._stories;
  }

}
