import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Own
import { NewsDataService } from 'src/app/services/news-data.service';
import { Item } from 'src/app/models/item';
import { ItemType } from 'src/app/models/item-type.enum';

/**
 * Component to show a story detail.
 */
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryComponent implements OnInit {

  /** Story to be shown */
  item: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private newsDataService: NewsDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    // Get story from API and update view, or redirect to /404 if there's an error
    this.activatedRoute.params.subscribe(params => {
      this.newsDataService.getItem(params["id"]).subscribe(item => {
        if (item.type != ItemType.STORY) this.router.navigate(["/404"]);
        this.item = item;
        this.changeDetectorRef.detectChanges();
      },
      error => {
        this.router.navigate(["/404"]);
      })
    });
  }

}
