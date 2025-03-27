import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  postCategory: string = "";
  @Input()
  postTitle: string = "";
  @Input()
  postSubtitle: string = "";
  @Input()
  postCoverURL: string = "";
  @Input()
  postAuthorAvatarURL: string = "";
  @Input()
  postAuthor: string = "";
}
