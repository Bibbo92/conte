export class CustomInputInterface {
  inputType: string; //ipotzzando che il form possa avere diversi input type, esempio pass, mail
  inputName: InputName;
  prefilledValue?: string;
}

export enum InputName {
  NAME = 'Nome proprietario',
  SURNAME = 'Cognome proprietario',
  MODEL = 'Modello del veicolo',
  LICENSEPLATE = 'Targa del veicolo',
  PASSWORD = 'Password',
}
