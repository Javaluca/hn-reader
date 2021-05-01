import { Injectable } from '@angular/core';
import { BASE_URL, PAGE_SIZE } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { concatMap, map, toArray, first, mergeMap, switchMap } from 'rxjs/operators';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private http: HttpClient) { }

  /**
   * Return the ids of the top stories
   * @returns
   */
  private _topStoriesId(): Observable<number[]> {
    return this.http.get<number[]>(`${BASE_URL}topstories.json`)
  }

  /**
   * Return 10 story from the top stories
   * @param page
   * @returns
   */
  topStories(page: number = 0): Observable<Story[]> {
    return this._topStoriesId().pipe(
      map(stories => stories || []),
      map(stories => stories.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)),
      switchMap(stories => stories),
      concatMap(id => this.getStory(id)),
      toArray(),
    );
  }

  /**
   * Return the story by its id
   * @param id
   * @returns
   */
  getStory(id: number): Observable<Story> {
    if (!id) {
      return throwError('Invalid story id');
    }
    return this.http.get<Story>(`${BASE_URL}item/${id}.json`).pipe(
      map(story => Object.assign(new Story, story))
    );
  }
}
