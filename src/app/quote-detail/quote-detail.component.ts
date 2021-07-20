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

  quoteDelete(complete: boolean) {
    this.IsComplete.emit(complete);
  }
  liked: number = 0;
  unliked: number = 0;
  
  upVote() {
   
      
      return this.liked  ++;
    } 

    
 

  downVote() {
    
     
      return this.unliked ++;
    } 
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
