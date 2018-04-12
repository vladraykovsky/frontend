import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentModel} from './comment.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {
  }


  getAll() {
    return this.http.get<CommentModel[]>('https://morning-anchorage-39495.herokuapp.com/api/comment');
  }

  getCommentByForeign(index: number) {
    return this.http.get('https://morning-anchorage-39495.herokuapp.com/api/comment/' + index.toString());
  }

  doPatch(comment: CommentModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const body = {comment_id: comment.comment_id, comment_value: comment.comment_value, patient_id: comment.patient_id};
    return this.http.patch<CommentModel>('https://morning-anchorage-39495.herokuapp.com/api/comment', body, httpOptions);
  }

  doPost(comment: CommentModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8',
        'Authorization': 'my-auth-token'
      })
    };

    const body = {comment_id: comment.comment_id, comment_value: comment.comment_value, patient_id: comment.patient_id};
    console.log('sending');
    return this.http.post<CommentModel>('https://morning-anchorage-39495.herokuapp.com/api/comment', JSON.stringify(body), httpOptions);
  }


  doDelete(comment: CommentModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    const body = {comment_id: comment.comment_id, comment_value: comment.comment_value, patient_id: comment.patient_id};
    return this.http.delete<CommentModel>('https://morning-anchorage-39495.herokuapp.com/api/comment/' + comment.comment_id.toString());
  }

}
