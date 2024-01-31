import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  birthDate!: Date;
  user = new User();

  item$: Observable<any[]>; // Tipizirajte prema potrebi

  constructor(private firestore: AngularFirestore) {
    this.item$ = this.firestore.collection('items').valueChanges(); // Preuzimanje podataka iz Firestore-a
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log('adding user is finished', result);
      });
  }
}
