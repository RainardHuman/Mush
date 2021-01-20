import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FeedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
