import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { EventEmitter, OnInit } from "@angular/core";
import { Component, Input, Output } from "@angular/core";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget-component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  constructor(private uniqueIdService: UniqueIdService) { }

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  public fonts = {
    faThumbsUp
  }

  public ngOnInit(): void {
    if (this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }

}
