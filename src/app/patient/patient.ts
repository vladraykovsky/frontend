export class Patient {
   public patient_id: number;
   public name: string;
   public surname: string;
   public date_of_birth: string;
   public country: string;
   public state: string;
   public address: string;
   public sex: string;

   constructor( patient_id: number, name: string, surname: string, date_of_birth: string, country: string, state:
     string, address: string, sex: string ) {
     this.patient_id = patient_id;
     this.name = name;
     this.surname = surname;
     this.date_of_birth = date_of_birth;
     this.country = country;
     this.state = state;
     this.address = address;
     this.sex = sex;
   }

}
