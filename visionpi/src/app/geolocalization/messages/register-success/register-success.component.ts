import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterSuccessMessage } from '../interfaces/register-success-message'

@Component({
  selector: 'register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterSuccessComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RegisterSuccessMessage) { }

  ngOnInit() {
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  action() {
    this.close();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  close() {
    this.dialogRef.close();
  }

}
