import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyDK4CB_NPKOUJIqIBIiWFEaZXsEyeOuB9M",
  authDomain: "newproject-16d3f.firebaseapp.com",
  databaseURL: "https://newproject-16d3f-default-rtdb.firebaseio.com",
  projectId: "newproject-16d3f",
  storageBucket: "newproject-16d3f.appspot.com",
  messagingSenderId: "689085058784",
  appId: "1:689085058784:web:bd243d7ce40f4f31ef8a85",
  measurementId: "G-0DQC7TFZRP"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}