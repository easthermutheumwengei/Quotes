import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  
  @Output() addQuote = new EventEmitter();

  submitQuote(val:any) {
    this.addQuote.emit(val);
    
}

  constructor() { }

  ngOnInit(): void {
  }

}
