import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() time: Timestamp;
  @Input() image: string;
  @Input() video: string;
}
