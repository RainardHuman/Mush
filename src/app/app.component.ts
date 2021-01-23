import { Component } from '@angular/core';
import { AuthService } from "./services/auth.firebase.service";
import {BehaviorSubject, Observable} from "rxjs";
import firebase from "firebase";
import User = firebase.User;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mush';
  photoURL: BehaviorSubject<String> = new BehaviorSubject<String>('/assets/blank_profile.svg')
  constructor(public authService: AuthService) {
    authService.user$.subscribe((user: User) => {
      if(user) {
        this.photoURL.next(user.photoURL);
      } else {
        this.photoURL.next('/assets/blank_profile.svg');
      }
    })
  }
}
