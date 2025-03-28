import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
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
