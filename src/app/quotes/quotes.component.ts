import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title: 'Quotes';
  quotes: Quote[] = [
    new Quote(1, 'Henry David Thoreau', 'Go confidently in the direction of your dreams! Live the life you have imagined', 'Esther', new Date(2021, 7, 22), 67, 5),
    new Quote(2, 'Mae West', 'You only live once, but if you do it right, once is enough', 'Marion', new Date(2021, 7, 22), 67, 5),
    new Quote(1, 'Henry David Thoreau', 'Go confidently in the direction of your dreams! Live the life you have imagined', 'Esther', new Date(2021, 7, 22), 67, 5),
    new Quote(1, 'Henry David Thoreau', 'Go confidently in the direction of your dreams! Live the life you have imagined', 'Esther', new Date(2021, 7, 22), 67, 5),
    new Quote(1, 'Henry David Thoreau', 'Go confidently in the direction of your dreams! Live the life you have imagined', 'Esther', new Date(2021, 7, 22), 67, 5),
    new Quote(1,'Henry David Thoreau','Go confidently in the direction of your dreams! Live the life you have imagined','Esther', new Date(2021,7,22),67,5),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
