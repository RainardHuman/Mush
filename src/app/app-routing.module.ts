import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AuthComponent } from './website/auth/auth.component';
import { ReviewsComponent } from './website/reviews/reviews.component';
import { MessagesComponent } from './website/messages/messages.component';
import { ApprovalsComponent } from './website/approvals/approvals.component';
import { FeedComponent } from './website/feed/feed.component';
import { FeedManagerComponent } from './website/feed-manager/feed-manager.component';
import { ContactComponent } from './website/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'approvals', component: ApprovalsComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'feed-manager', component: FeedManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
