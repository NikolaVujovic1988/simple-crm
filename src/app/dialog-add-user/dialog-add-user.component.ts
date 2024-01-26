import { Component } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  birthDate!: Date;
  user = new User();

  constructor() {

  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);
  }
}
