import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from "../../services/firestore.firebase.service";
import { Feed} from "../../interfaces/cards.model";
import { AngularFireStorage } from "@angular/fire/storage";


@Component({
  selector: 'app-feed-manager',
  templateUrl: './feed-manager.component.html',
  styleUrls: ['./feed-manager.component.scss']
})
export class FeedManagerComponent implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('message') message: ElementRef;

  selectedFile: File;
  label: string;
  feed: Feed;

  constructor(public fireStorage: AngularFireStorage, private firestore: FirestoreService) { }

  ngOnInit(): void {}

  selectFile($event: Event) {
    if ($event.target['files'][0]['name'].length) {
      this.label = $event.target['files'][0]['name']
      this.selectedFile = $event.target['files'][0];
    } else {
      this.initFields();
    }
  }

  async sendFeed() {
     this.feed = {
      content: this.message.nativeElement.value,
      title: this.title.nativeElement.value,
      time: new Date()
    }

    let upload = null;
    if (this.selectedFile) {
      const type = this.selectedFile.type.includes('video') ? 'video' : 'image';
      upload = await this.fireStorage.upload(type+ '/' + this.label, this.selectedFile);
      await upload.ref.getDownloadURL().then( url => {
        this.feed[type] = url;
      });

    }


    this.firestore.addFeed(this.feed);
  }

  initFields() {
    this.selectedFile = null;
    this.feed = null;
    this.label = 'Please select a media file.'
  }
}
