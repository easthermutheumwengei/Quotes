import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title: 'Quotes';
  quotes: Quote[] = [
    new Quote(1,'Henry David Thoreau','Go confidently in the direction of your dreams! Live the life you have imagined')
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
