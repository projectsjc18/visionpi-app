import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SuccessfulRegistration } from '../messages/successful-registration.component'

export interface Profile {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  genres: string[] = ['Female', 'Male', 'LGBT+'];
  profiles: Profile[] = [
    {value: 'Deus', viewValue: 'Deus'},
    {value: 'Warrior', viewValue: 'Warrior'},
    {value: 'Mortal', viewValue: 'Mortal'}
  ];
  services = [
    { id:1, description:'Dashboard', icon:'dashboard' },
    { id:2, description:'User', icon:'people' },
    { id:3, description:'Geolocalization', icon:'my_location' },
    { id:4, description:'Monitoring', icon:'alarm' },
    { id:5, description:'Surveillance', icon:'videocam' }
  ];
  permissions: string[] = ['Read', 'Write'];
  notifications: string[] = ['Telephone', 'Email', 'SMS'];
  userForm;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  step = 0;

  constructor(private formBuilder: FormBuilder, public userService: UserService,
              public dialog: MatDialog) {
    this.userForm = this.formBuilder.group({
      account: new FormControl('', []),
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      gender: new FormControl('', [
        Validators.required,
      ]),
      birthday: new FormControl('', [
        Validators.required,
      ]),
      profile: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]),
      platforms: new FormGroup({
        services: new FormArray([]),
        permissions: new FormArray([]),
        notifications: new FormArray([])
      })
    });

    this.addServices();
  }

  ngOnInit() {
  }

  setStep(index: number) { this.step = index; }

  nextStep() { this.step++; }

  prevStep() { this.step--; }


  onSubmit(userData) {
    console.log('userdata: ' + userData);
    const selectedServices = this.userForm.controls.platforms.value.services
      .map((v, i) => v ? this.services[i].description : null)
      .filter(v => v !== null);
    console.log(selectedServices);
    userData.platforms.services = selectedServices;
    userData.account = this.generateAccount(userData.username);
    this.userService.register(userData)
    .subscribe(data => {
      this.openDialog(userData.username);
    });
  }

  get account() { return this.userForm.get('account'); }
  get email() { return this.userForm.get('email'); }
  get firstname() { return this.userForm.get('firstname'); }
  get lastname() { return this.userForm.get('lastname'); }
  get gender() { return this.userForm.get('gender'); }
  get birthday() { return this.userForm.get('birthday'); }
  get profile() { return this.userForm.get('profile'); }
  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }
  get confirmPassword() { return this.userForm.get('confirmPassword'); }
  get street() { return this.userForm.get('street'); }
  get city() { return this.userForm.get('city'); }
  get state() { return this.userForm.get('state'); }
  get country() { return this.userForm.get('country'); }
  get postalCode() { return this.userForm.get('postalCode'); }

  private addServices() {
    this.services.forEach((o, i) => {
      const control = new FormControl();
      (this.userForm.controls.platforms.controls.services as FormArray).push(control);
    });
  }

  private openDialog(username) {
    const session = JSON.parse(localStorage.getItem('session'));
    const dialogRef = this.dialog.open(SuccessfulRegistration, {
      width: '300px',
      data: {user: session.clientId, newUser: username}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userForm.reset();
      //this.updateUsers();
      //this.newUser = result;
    });
  }

  generateAccount(name){
    const initialLetters ='VP';
    const number = Math.floor(Math.random() * 5000) + 1000;
    const account = initialLetters + name.toUpperCase() + number;
    return account;
  }

}
