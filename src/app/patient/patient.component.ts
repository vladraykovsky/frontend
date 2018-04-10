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

  name: string = '';
  surname: string = '';
  date_of_birth: string = '';
  country: string = '';
  state: string = '';
  address: string = '';
  sex: string = '';

  const: number = 1;

  constructor(public patientservice: PatientService , public changeDetector: ChangeDetectorRef) {
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
    this.patientservice.doPatch(this.patient).subscribe((data: Patient ) => {this.patient = data; },
      error => console.log(error));
    this.const = 1;
  }



  savePatient(): void {
    let patient: Patient = new Patient(0 , this.name , this.surname , this.date_of_birth,
      this.country, this.state, this.address, this.sex );
    this.patients.push(patient);
    this.patientservice.doPost(patient).subscribe((data: Patient ) => { patient = data; },
      error => console.log(error));
    this.patient = patient;
    this.const = 1;
  }



  deletePatient(patient: Patient): void  {
    let patient_cascade = new Patient(patient.patient_id , '',
       '', '', '', '', '', '');
    this.patientservice.doDeleteCascade(patient_cascade).subscribe((data: Patient) => {patient_cascade = data; });
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
