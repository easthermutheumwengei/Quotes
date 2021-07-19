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
    new Quote(2, 'Mae West', 'You only live once, but if you do it right, once is enough', 'Marion', new Date(2018, 7, 22), 111, 11),
    new Quote(3, 'Mother Teresa', 'In this life we cannot do great things. We can only do small things with great love.', 'Lucy', new Date(2021, 8, 22), 66, 7),
    new Quote(4, 'Tony Robbins', 'The only impossible journey is the one you never begin', 'Esther', new Date(2021, 7, 22), 67, 5),
    new Quote(5, 'Maya Angelou', 'You will face many defeats in life, but never let yourself be defeated', 'Esther', new Date(2018, 7, 10), 220, 11),
    new Quote(6,'Abraham Lincoln'
    ,'In the end, it is not the years in your life that count. It is the life in your years','Esther', new Date(2020,6,22),330,5),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
