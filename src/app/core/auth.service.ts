import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
//import { switchMap, map } from 'rxjs/operators';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  authState: firebase.User = null;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

    // this.user$ = this.afAuth.authState
    //   .switchMap(user => {
    //     if (user) {
    //       this.authState = user;
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
    //     } else {
    //       this.authState = null;
    //       return Observable.of(null)
    //     }

    //   })
  }


  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credentail) => {
        this.updateUserData(credentail.user)
      })
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        subscriber: true
      }
    }
    return userRef.set(data, { merge: true })
  }

  candRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber'];
    return this.checkAuthorization(user, allowed)
  }

  candEdit(user: User): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed)
  }

  candDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed)
  }


  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false;

    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }

    return false;
  }

  //Authentification

  get authentificated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authentificated ? this.authState : null;
  }




}
