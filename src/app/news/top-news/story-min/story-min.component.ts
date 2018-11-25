import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

// Own
import { Item } from 'src/app/models/item';
import { NewsDataService } from 'src/app/services/news-data.service';

/**
 * Component to show a new in min version.
 */
@Component({
  selector: 'app-story-min',
  templateUrl: './story-min.component.html',
  styleUrls: ['./story-min.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryMinComponent implements OnInit {

  /** Id of the story to be shown */
  @Input() id: number;

  /** Story to be shown */
  item: Item;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private newsDataService: NewsDataService,
  ) { }

  ngOnInit() {
    this.newsDataService.getItem(this.id).subscribe(item => {
      this.item = item;
      this.changeDetectorRef.detectChanges();
    });
  }

}
