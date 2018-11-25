import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

//Material
import { PageEvent } from '@angular/material/paginator';

// Own
import { NewsDataService } from 'src/app/services/news-data.service';

/**
 * Component for the home view.
 * It shows a list of best stories from HackerNews
 */
@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNewsComponent implements OnInit {

  /* Ids of best stories */
  itemIds$: Observable<number[]>;
  /* Page been viewed currently */
  currentPage: number = 0;
  /* Elements shown per page */
  pageSize: number = 50;
  /* Index of the first element in current page */
  firstElement: number = 0;
  /* Index of the last element in current page */
  lastElement: number = 49;

  constructor(
    private newsDataService: NewsDataService,
  ) { }
  
  ngOnInit() {
    this.itemIds$ = this.newsDataService.getBestStories();
  }

  /**
   * Method to be called when page of paginator is changed
   */
  onPageChanged(page: PageEvent){
    this.currentPage = page.pageIndex;
    this.firstElement = this.currentPage*this.pageSize;
    this.lastElement = (this.currentPage+1)*this.pageSize - 1;
  }
}
