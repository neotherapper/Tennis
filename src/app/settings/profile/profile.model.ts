export enum GenderOptions {
  'f',
  'm',
}

export interface ProfileI {
  id: number;
  fname: string;
  lname: string;
  gender: GenderOptions;
  birthday: string;
  mobile: string;
}