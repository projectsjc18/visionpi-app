import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
/* Services */
import { AccountService } from '../services/account.service';
/* Dialog */
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterSuccessComponent } from '../messages/register-success/register-success.component';

@Component({
  selector: 'account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss']
})
export class AccountRegisterComponent implements OnInit {

  accountRegisterForm;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, public matDialog: MatDialog) {
    this.accountRegisterForm = this.formBuilder.group({
      accountSearch: new FormControl('', [
        /*Validators.required*/
      ]),
      account: new FormControl({value: '', disabled: true}, [
        /*Validators.required*/
      ]),
      user: new FormControl({value: '', disabled: true}, [

      ]),
      description: new FormControl('', [

      ]),
      status: new FormControl(false, [

      ]),
      fleet: this.formBuilder.group({
        identifier: new FormControl('', [

        ]),
        name: new FormControl('', [

        ]),
        fleetDescription: new FormControl('', [

        ])
      }),
      route: this.formBuilder.group({
        routeIdentifier: new FormControl('', [

        ]),
        routeName: new FormControl('', [

        ]),
        routeDescription: new FormControl('', [

        ]),
      }),
      vehicle: this.formBuilder.group({
        vehicleIdentifier: new FormControl('', [

        ]),
        brand: new FormControl('', [

        ]),
        model: new FormControl('', [

        ]),
        year: new FormControl('', [

        ]),
        operator: new FormControl('', [

        ]),
      }),
    })
  }

  ngOnInit() {
  }

  /* ---------- Load Information ----- */
  searchAccount(userAccount) {
    this.accountService.getAccountsByUserAccount(userAccount)
    .subscribe(data => {
      this.accountRegisterForm.patchValue({
        account: data[0].account,
        user: data[0].username,
      });
      console.log("Get account success! " );
    });
  }

  /* ---------- Save ----------------- */
  registerAccount() {
    //TEST
    /*console.log(this.accountRegisterForm.value);
    console.log("raw value");
    console.log(this.accountRegisterForm.getRawValue());


    this.openSuccesRegister("12345");*/
    this.accountService.registerAccount(this.accountRegisterForm.getRawValue())
    .subscribe(data => {

      this.openSuccesRegister(this.accountRegisterForm.getRawValue().account);
      this.accountRegisterForm.reset();
      console.log("Get account success! " );
    });
  }

  cancelRegisterAccount() {

  }

  /* ---------- Dialog --------------- */
  openSuccesRegister(message) {
    const session = JSON.parse(localStorage.getItem('session'));
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "register-success-message";
    dialogConfig.height = "20em";
    dialogConfig.width = "30em";
    dialogConfig.data = {title: session.clientId, message: message};
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(RegisterSuccessComponent, dialogConfig);
  }

  /* ----------  Form attributes ----- */
  get accountSearch() { return this.accountRegisterForm.get('accountSearch'); }
  get account() { return this.accountRegisterForm.get('account'); }
  get user() { return this.accountRegisterForm.get('user'); }
  get description() { return this.accountRegisterForm.get('description'); }
  get status() { return this.accountRegisterForm.get('status'); }
  get identifier() { return this.accountRegisterForm.get('fleet').get('identifier'); }
  get name() { return this.accountRegisterForm.get('fleet').get('name'); }
  get fleetDescription() { return this.accountRegisterForm.get('fleet').get('fleetDescription'); }
  get routeIdentifier() { return this.accountRegisterForm.get('route').get('routeIdentifier'); }
  get routeName() { return this.accountRegisterForm.get('route').get('routeName'); }
  get routeDescription() { return this.accountRegisterForm.get('route').get('routeDescription'); }
  get vehicleIdentifier() { return this.accountRegisterForm.get('vehicle').get('vehicleIdentifier'); }
  get brand() { return this.accountRegisterForm.get('vehicle').get('brand'); }
  get model() { return this.accountRegisterForm.get('vehicle').get('model'); }
  get year() { return this.accountRegisterForm.get('vehicle').get('year'); }
  get operator() { return this.accountRegisterForm.get('vehicle').get('operator'); }

}
