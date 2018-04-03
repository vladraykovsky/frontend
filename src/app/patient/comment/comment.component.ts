import {Component, OnInit} from '@angular/core';
import {CommentModel} from './comment.model';
import {CommentService} from './comment.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-comment',
  template:
  '<p *ngIf="true; then descriptionBlock else add"> </p>' +
  '<ng-template #descriptionBlock>' +
  '  <p *ngFor="let commentr of comments" (click)="lock(commentr)">{{commentr.comment_value}}>' +
  '    <button (click)="delete()">delete</button>\n' +
  '    <button (click)="showAdd()">add</button>\n' +
  '  </p>' +
  '</ng-template>' +
  '<ng-template #add>' +
  '  <textarea [(ngModel)]="comment_value"></textarea>' +
  '  <input [(ngModel)]="patient_id"/>' +
  '  <button (click)="add()">save</button>' +
  '</ng-template>' +
  '<ng-template #edit></ng-template>',
  providers: [CommentService]
})
export class CommentComponent implements OnInit {
  static comment_id: number;
         comment_value: string;
         patient_id: number;
  comment: CommentModel;
  comments: CommentModel[];
  switcher = 1;

  constructor(private componentservice: CommentService) {}

  ngOnInit(): void {
    this.componentservice.getData().subscribe(data => {this.comments = <CommentModel[]> data ; });
  }


   delete(): void {
    this.componentservice.doDelete(this.comment);
  }

   add(): void {
    const commentadd  = new CommentModel(CommentComponent.comment_id, this.comment_value, this.patient_id);
    this.comments.unshift(commentadd);
    this.componentservice.doPost(commentadd);
    CommentComponent.comment_id++;
    this.switcher = 1;
  }

   edit(): void {
    this.componentservice.doPatch(this.comment);
  }


  lock(comment: CommentModel): void {
   this.comment = comment;
  }

  showAdd() {
    this.switcher = 2;
  }




}
