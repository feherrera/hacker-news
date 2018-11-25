import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

// Own
import { NewsDataService } from 'src/app/services/news-data.service';
import { Item } from 'src/app/models/item';

/**
 * Component to show a comment in a new.
 */
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {

  /** Id of the comment to be shown */
  @Input() id: number;

  /** Comment to be shown */
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
