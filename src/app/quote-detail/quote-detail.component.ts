import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: any;
  @Output() IsComplete = new EventEmitter<boolean>();

  QuoteDelete(complete: boolean) {
    this.IsComplete.emit(complete);
  }
  liked: boolean = true;
  unliked: boolean = true;
  upVote() {
    if (this.liked) {
      this.quote.upVote++;
      this.liked = false;
    } else {
      this.quote.upVote--;
      this.liked = true;
    }
  }

  downVote() {
    if (this.unliked) {
      this.quote.downVote--;
      this.unliked = false;
    } else {
      this.quote.downVote++;
      this.unliked = true;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
