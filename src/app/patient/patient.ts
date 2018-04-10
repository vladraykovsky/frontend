export class Patient {
   public _patient_id: number;
   public _name: string;
   public _surname: string;
   public _date_of_birth: string;
   public _country: string;
   public _state: string;
   public _address: string;
   public _sex: string;
   public _setComment: Set<Comment>;

   constructor( patient_id: number, name: string, surname: string, date_of_birth: string, country: string, state:
     string, address: string, sex: string ) {
     this._patient_id = patient_id;
     this._name = name;
     this._surname = surname;
     this._date_of_birth = date_of_birth;
     this._country = country;
     this._state = state;
     this._address = address;
     this._sex = sex;
   }


  get patient_id(): number {
    return this._patient_id;
  }

  set patient_id(value: number) {
    this._patient_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get date_of_birth(): string {
    return this._date_of_birth;
  }

  set date_of_birth(value: string) {
    this._date_of_birth = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }
}
