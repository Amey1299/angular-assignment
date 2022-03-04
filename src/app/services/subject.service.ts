import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  isLogIn = new BehaviorSubject(false);
  constructor() { }
}
