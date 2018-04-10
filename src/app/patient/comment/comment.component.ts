import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CommentModel} from './comment.model';
import {CommentService} from './comment.service';
import {Patient} from '../patient';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentService]
})
export class CommentComponent implements OnChanges {

  static comment_id = 0;
  comment_value: string = 'enter text';
  comment: CommentModel;
  comments: CommentModel[] = [];
  commentsAll: CommentModel[] = [];
  count: number = 1;

  @Input() patient: Patient;


  constructor(private componentservice: CommentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.patient !== null) {
      this.componentservice.getCommentByForeign(this.patient.patient_id).subscribe(data => {
        this.comments = <CommentModel[]> data;
      });

      this.componentservice.getAll().subscribe((data => {
        this.commentsAll = <CommentModel[]>data;
      }));
      if (this.commentsAll.length > 0) {
        CommentComponent.comment_id = this.commentsAll[this.commentsAll.length - 1].comment_id;
        console.log(this.commentsAll[this.commentsAll.length - 1]);
      }
    }
  }

   delete(comment: CommentModel): void {
    this.componentservice.doDelete(<CommentModel>comment).subscribe((data: CommentModel) => {comment = data; });
    console.log('delete comment');
    console.log(comment);
    let index = this.comments.indexOf(this.comment);
       this.comments.splice(index, 1);
     if ( index > 0) {
       this.comment = this.comments[index - 1];
     }
     if ( index === 0) {
       this.comment = this.comments[index + 1];
     }

  }

   add(): void {

     CommentComponent.comment_id++;
     let commentadd: CommentModel  = new CommentModel(CommentComponent.comment_id , this.comment_value, <number>this.patient.patient_id);
     console.log(commentadd);
     this.componentservice.doPost(commentadd).subscribe((data: CommentModel) => {commentadd = data; } ,
       error => console.log(error) );
    this.comments.unshift(<CommentModel>commentadd);
    this.count = 1;
  }


   edit(): void {
    this.componentservice.doPatch(this.comment).subscribe((data: CommentModel) => {this.comment = data; } ,
      error => console.log(error) );
    this.count = 1;
  }

  lock(comment: CommentModel): void {
   this.comment = comment;
   console.log(comment);
  }
}
