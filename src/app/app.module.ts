import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { AuthComponent } from './website/auth/auth.component';
import { ReviewsComponent } from './website/reviews/reviews.component';
import { MessagesComponent } from './website/messages/messages.component';
import { ApprovalsComponent } from './website/approvals/approvals.component';
import { FeedComponent } from './website/feed/feed.component';
import { FeedManagerComponent } from './website/feed-manager/feed-manager.component';
import { ContactComponent } from './website/contact/contact.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';

import { AuthService } from "./services/auth.firebase.service";
import { FirestoreService } from "./services/firestore.firebase.service";
import { StorageService } from "./services/storage.firebase.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ReviewsComponent,
    MessagesComponent,
    ApprovalsComponent,
    FeedComponent,
    FeedManagerComponent,
    ContactComponent,
    FeedCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, FirestoreService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
