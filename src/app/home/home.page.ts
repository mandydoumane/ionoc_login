import { MandyService } from './../mandy.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataUser = {
    email: '',
    password: ''
 };

 connected: boolean;
 mail: string;
 method: any;
 bonjour: string;

  constructor(
    public afAuth: AngularFireAuth,
    public mandy: MandyService
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
    };

  test() {
    this.mandy.bonjour = 'bonjour';
  }
  

}
