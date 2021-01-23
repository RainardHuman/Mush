import { Component, OnInit } from '@angular/core';
import { Feed } from '../../interfaces/cards.model';
import { FirestoreService } from "../../services/firestore.firebase.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feeds: Feed[] = []

  constructor(private firestore: FirestoreService) {
    firestore
      .getFeeds()
      .subscribe(docs => {
        this.feeds = <Feed[]> firestore.getDataFromDocs(docs);
      })
  }

  ngOnInit(): void {
  }

}
