import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private firebaseAuth: AngularFireAuth) {
  }

  signInWithGoogle() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  setAuthStatus(status: boolean) {
    this.isAuthenticated =  status;
  }

  authenticationStatus(): boolean {
    return this.isAuthenticated;
  }

  autoLogin() {
    const authStatus: boolean = JSON.parse(localStorage.getItem('authenticated'));
    if (!authStatus) {
      this.isAuthenticated = false;
    } else {
      this.isAuthenticated = authStatus;
    }
  }
}
