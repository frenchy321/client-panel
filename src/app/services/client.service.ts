import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor() {}
}