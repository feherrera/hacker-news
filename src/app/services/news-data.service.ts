import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Own
import { Item } from '../models/item';

/**
 * Service that provide conection to the News API.
 * 
 * See {@link Item} for details about the data structure.
 */
@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  private apiUrl: string = 'https://hacker-news.firebaseio.com/v0';

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * Get an item from the HackerNews API, given it id.
   * @param id The id of the item to get.
   */
  getItem(id: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.apiUrl}/item/${id}.json`);
  }

  /**
   * Get best stories from the HackerNews API.
   */
  getBestStories(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.apiUrl}/beststories.json`);
  }
}
