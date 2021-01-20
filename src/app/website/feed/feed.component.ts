import { Component, OnInit } from '@angular/core';
import {Feed} from '../../interfaces/cards.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feeds: Feed[] = [
      { title: 'initial', content: 'first feed item!', time: new Date(), image: 'https://i.pinimg.com/originals/55/d8/40/55d840e6498b80521b106b0646247cb6.jpg' },
      { title: 'secondary title', content: 'first feed item!', time: new Date(), video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { title: 'sdfvihbviadsev', content: ';kiojv nbpcxzvnbpzdfnjgb', time: new Date(), image: 'https://i.pinimg.com/originals/55/d8/40/55d840e6498b80521b106b0646247cb6.jpg' },
      { title: 'hjb pioxcznhbpijfnbv;sdlkiaJFBV', content: 'first feed item!', time: new Date() },
      { title: 'mbvdoknbokjdf', content: 'first feed item!', time: new Date(), image: 'https://i.pinimg.com/originals/55/d8/40/55d840e6498b80521b106b0646247cb6.jpg' },
      { title: 'dbgfijndpijfbnpidzb', content: 'first feed item!', time: new Date(), image: 'https://i.pinimg.com/originals/55/d8/40/55d840e6498b80521b106b0646247cb6.jpg' },
      { title: 'ijdsfshbvgpijadefipbv', content: 'first feed item!', time: new Date() },
      { title: 'as', content: 'first feed item!', time: new Date(), image: 'https://i.pinimg.com/originals/55/d8/40/55d840e6498b80521b106b0646247cb6.jpg' },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
