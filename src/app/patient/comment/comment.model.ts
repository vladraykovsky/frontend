export class CommentModel {

          public comment_id: number ;
          public comment_value: string;
          public patient_id: number;

  constructor(_comments_id: number, _comment_value: string, _patient_id: number) {
    this.comment_id = _comments_id;
    this.comment_value = _comment_value;
    this.patient_id = _patient_id;
  }



}
