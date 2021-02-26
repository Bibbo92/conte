import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PolizzeService } from '../../service/polizze.service';
import { Polizza } from '../../interfaces/polizza';
import {
  CustomInputInterface,
  InputName,
} from '../../interfaces/customInputInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  //elementi che comporranno il form di cui l'elemento PASSWORD è solo a scopo illustrativo per mostrare la personalizzabilita del componente input
  inputs: CustomInputInterface[] = [
    {
      inputName: InputName.NAME,
      inputType: 'text',
    },
    {
      inputName: InputName.SURNAME,
      inputType: 'text',
    },
    {
      inputName: InputName.MODEL,
      inputType: 'text',
    },
    {
      inputName: InputName.LICENSEPLATE,
      inputType: 'text',
    },
    {
      inputName: InputName.PASSWORD,
      inputType: 'password',
    },
  ];

  showError: boolean = false;
  selectedPolizza: Polizza;
  formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public polizzaService: PolizzeService
  ) {}

  ngOnInit(): void {
    //inizializzo il formGroup vuoto andandolo a riempire dinamicamente dopo
    this.formGroup = this.formBuilder.group({});

    //verifico se siamo in caso di modifica polizza o di nuova polizza
    if (this.polizzaService.selectedPolizza) {
      this.selectedPolizza = this.polizzaService.selectedPolizza;
      //aggiungo dinamicamente i form control al formGroup
      this.inputs.forEach((input) => {
        this.formGroup.addControl(
          input.inputName,
          new FormControl('', [Validators.required])
        );

        //recupero i dati dalla polizza selezionata
        this.prefillFormValue(input);
      });
    } else {
      this.inputs.forEach((input) => {
        //aggiungo dinamicamente i form control al formGroup
        this.formGroup.addControl(
          input.inputName,
          new FormControl('', [Validators.required])
        );
      });
    }
  }

  goToListaPolizze() {
    this.router.navigateByUrl('/polizze-list');
  }

  submit() {
    //prendo i valori dal formgroup e creo un oggetto Polizza
    let polizza: Polizza = {
      id: this.selectedPolizza ? this.selectedPolizza.id : Math.random(),
      name: this.formGroup.get(InputName.NAME).value,
      surname: this.formGroup.get(InputName.SURNAME).value,
      model: this.formGroup.get(InputName.MODEL).value,
      licensePlate: this.formGroup.get(InputName.LICENSEPLATE).value,
      password: this.formGroup.get(InputName.PASSWORD).value,
    };

    //verifico se il form sia valid
    this.showError = !this.formGroup.valid ? true : false;

    if (!this.showError) {
      //se il from è valid e ho una polizza preselezionata vado editPolizza altrimenti creo una nuova polizza
      if (this.selectedPolizza) {
        this.polizzaService.editPolizza(polizza);
      } else {
        this.polizzaService.addNewPolizza(polizza);
      }
      this.goToListaPolizze();
    }
  }

  //metodo per riempimento del form quando si va vuole modificare una polizza
  prefillFormValue(input: CustomInputInterface) {
    switch (input.inputName) {
      case InputName.NAME:
        input.prefilledValue = this.selectedPolizza.name;
        this.formGroup
          .get(InputName.NAME)
          .setValue(this.polizzaService.selectedPolizza.name);
        break;
      case InputName.SURNAME:
        input.prefilledValue = this.selectedPolizza.surname;
        this.formGroup
          .get(InputName.SURNAME)
          .setValue(this.polizzaService.selectedPolizza.surname);
        break;
      case InputName.PASSWORD:
        input.prefilledValue = this.selectedPolizza.password;
        this.formGroup
          .get(InputName.PASSWORD)
          .setValue(this.polizzaService.selectedPolizza.password);
        break;
      case InputName.MODEL:
        input.prefilledValue = this.selectedPolizza.model;
        this.formGroup
          .get(InputName.MODEL)
          .setValue(this.polizzaService.selectedPolizza.model);
        break;
      case InputName.LICENSEPLATE:
        input.prefilledValue = this.selectedPolizza.licensePlate;
        this.formGroup
          .get(InputName.LICENSEPLATE)
          .setValue(this.polizzaService.selectedPolizza.licensePlate);
        break;
    }
  }
}
