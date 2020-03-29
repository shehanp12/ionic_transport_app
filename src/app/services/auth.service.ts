import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'

import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
    
}

async googleSignin() {
  const provider = new auth.GoogleAuthProvider();
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user);
}

 private updateUserData(user:any) {

  const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  const data = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL
  }

  return userRef.set(data, { merge: true })

}

async signOut() {
  await this.afAuth.auth.signOut();
  this.router.navigate(['/']);
}

}
