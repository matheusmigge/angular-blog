import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  id: string | null = "0";
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
  @Input()
  postText: string = "";

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.postTitle= result.postTitle
    this.postCategory= result.postCategory
    this.postHeadline= result.postHeadline
    this.postCoverURL= result.postCoverURL
    this.postAuthorAvatarURL= result.postAuthorAvatarURL
    this.postAuthor= result.postAuthor
    this.postText= result.postText;
  }
}