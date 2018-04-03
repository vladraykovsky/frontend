import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentModel} from './comment.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('https://morning-anchorage-39495.herokuapp.com/api/comment/');
  }

  doPatch(comment: CommentModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const body = {comments_id: comment.comments_id, comment_value: comment.comment_value, patient_id: comment.patient_id};
    return this.http.patch<CommentModel>('https://morning-anchorage-39495.herokuapp.com/api/comment/update', body, httpOptions);
  }

  doPost(comment: CommentModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const body = {comments_id: comment.comments_id, comment_value: comment.comment_value, patient_id: comment.patient_id};
    return this.http.post<CommentModel>('https://morning-anchorage-39495.herokuapp.com/api/comment/add', body, httpOptions);
  }


  doDelete(comment: CommentModel) {
   /* const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    const body = {comments_id: comment.comments_id, comment_value: comment.comment_value, patient_id: comment.patient_id};
    return this.http.post<Comment>('https://morning-anchorage-39495.herokuapp.com/api/comment/delete', body, httpOptions);
  } */ }






}
