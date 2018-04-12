import {Component, OnInit} from '@angular/core';
import {Patient} from './patient';
import {PatientService} from './patient.service';
import {ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit {

  patients: Patient[];
  patient: Patient ;

  search: string = '';

  static patient_id = 0;
  name: string = '';
  surname: string = '';
  date_of_birth: string = '';
  country: string = '';
  state: string = '';
  address: string = '';
  sex: string = '';

  const: number = 1;

  constructor(public patientservice: PatientService ) {
  }



  ngOnInit(): void {
    this.patientservice.getData().subscribe(data => {this.patients = <Patient[]> data ; });
    this.patientservice.getFirst().subscribe(data => {this.patient = <Patient> data[0] ; });
  }


  switchPatient(patient: Patient): void {
    this.patient =  patient;
    console.log(this.patient);
  }




  editPatient(): void {
    this.patientservice.doPatch(this.patient).subscribe((data: Patient ) => {this.patient = <Patient>data;
    console.log(data); },
      error => console.log(error));
    this.const = 1;
  }



  savePatient(): void {
    PatientComponent.patient_id = this.patients[this.patients.length - 1].patient_id;
    PatientComponent.patient_id++;
    let patient: Patient = new Patient(PatientComponent.patient_id , this.name , this.surname , this.date_of_birth,
      this.country, this.state, this.address, this.sex );
    this.patientservice.doPost(patient).subscribe(response => {console.log(response); } );
    this.patient = patient;
    this.patients.push(patient);
    this.const = 1;
  }



  deletePatient(patient: Patient): void  {
     this.patientservice.doDelete(patient).subscribe((data: Patient) => {
       this.patients = this.patients.filter(p => p !== patient);
     });
    let index = this.patients.indexOf(patient);
    this.patients.splice(index, 1);
    if ( index > 0) {
      this.patient = this.patients[index - 1];
    }
    if ( index === 0) {
      this.patient = this.patients[index + 1];
    }
  }
}
