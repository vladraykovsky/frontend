export class CommentModel {

          private _comments_id: number ;
          private _comment_value: string;
          private _patient_id: number;

  constructor(comments_id: number, comment_value: string, patient_id: number) {
    this._comments_id = comments_id;
    this._comment_value = comment_value;
    this._patient_id = patient_id;
  }


   get comments_id(): number {
    return this._comments_id;
  }

  set comments_id(value: number) {
    this._comments_id = value;
  }

  get comment_value(): string {
    return this._comment_value;
  }

  set comment_value(value: string) {
    this._comment_value = value;
  }

  get patient_id(): number {
    return this._patient_id;
  }

  set patient_id(value: number) {
    this._patient_id = value;
  }
}
