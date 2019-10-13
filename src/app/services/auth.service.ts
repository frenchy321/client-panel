import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularFire2/auth';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}
}
