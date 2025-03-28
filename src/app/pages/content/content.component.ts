import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
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
