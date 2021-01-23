import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FirestoreService} from "../../services/firestore.firebase.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-feed-manager',
  templateUrl: './feed-manager.component.html',
  styleUrls: ['./feed-manager.component.scss']
})
export class FeedManagerComponent implements OnInit {
  files: File[] = [];
  $selectedFile: BehaviorSubject<string> = new BehaviorSubject<string>('Choose file.');
  constructor(public fireStorage: FirestoreService) {
    this.$selectedFile.subscribe(console.log);
  }

  ngOnInit(): void {}

  selectedFile($event: Event) {
    console.log($event.target['files'][0]['name'])
    if ($event.target['files'][0]['name'].length) {
      this.$selectedFile.next($event.target['files'][0]['name']);
    } else {
      this.$selectedFile.next('Something went wrong, please choose again.')
    }

  }
}
