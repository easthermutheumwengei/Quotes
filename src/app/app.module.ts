import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { HighlightDirective } from './highlight.directive';
import { PostedDatePipe } from './posted-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,
    HighlightDirective,
    PostedDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
