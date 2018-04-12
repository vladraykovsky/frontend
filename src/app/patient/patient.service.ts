import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentModel} from './comment/comment.model';
import {Patient} from './patient';
import {Injectable} from '@angular/core';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {
  }


  getData() {
    return this.http.get('https://morning-anchorage-39495.herokuapp.com/api/patient');
  }

  getFirst() {
    return this.http.get('https://morning-anchorage-39495.herokuapp.com/api/patient/first');
  }


  doPatch(patient: Patient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const body = {patient_id: patient.patient_id, name: patient.name, surname: patient.surname,
      date_of_birth: patient.date_of_birth, country: patient.country, state: patient.state, address: patient.address,
      sex: patient.sex };
    return this.http.patch('https://morning-anchorage-39495.herokuapp.com/api/patient/update', body, httpOptions);
  }



  doPost(patient: Patient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token;charset=UTF-8'
      })
    };
    const body = {patient_id: patient.patient_id, name: patient.name, surname: patient.surname,
      date_of_birth: patient.date_of_birth, country: patient.country, state: patient.state, address: patient.address,
      sex: patient.sex};
    console.log('sending' );
    return this.http.post<Patient>('https://morning-anchorage-39495.herokuapp.com/api/patient/add', patient );
  }


  doDelete(patient: Patient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8',
        'Authorization': 'my-auth-token'
      })
    };

    const body = {patient_id: patient.patient_id, name: patient.name, surname: patient.surname,
      date_of_birth: patient.date_of_birth, country: patient.country, state: patient.state, address: patient.address,
      sex: patient.sex};
    return this.http.delete('https://morning-anchorage-39495.herokuapp.com/api/patient/' + body.patient_id.toString());
  }

  doDeleteCascade(patient: Patient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const body = {comment_id: 0, comment_value: '', patient_id: patient.patient_id};
    return this.http.post('https://morning-anchorage-39495.herokuapp.com/api/comment/delete/foreign', body, httpOptions);
  }
}
