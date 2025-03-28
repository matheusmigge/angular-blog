import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  id: string = "0";
  @Input()
  postCategory: string = "";
  @Input()
  postTitle: string = "";
  @Input()
  postHeadline: string = "";
  @Input()
  postCoverURL: string = "";
  @Input()
  postAuthorAvatarURL: string = "";
  @Input()
  postAuthor: string = "";
}
