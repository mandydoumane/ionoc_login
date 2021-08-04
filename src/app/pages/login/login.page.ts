import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  dataUser = {
    email: '',
    password: ''
 };

 connected: boolean;
 mail: string;
 method: any;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.connected = false;
      } else {
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
        this.connected = true;
      }
    });
  }

  login() {
      this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
      this.dataUser = {
        email: '',
        password: ''
      };
    };

    signUp() {
      this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
      this.dataUser = {
        email: '',
        password: ''
      };
  };

  logout() {
      this.afAuth.signOut();
    }

}

