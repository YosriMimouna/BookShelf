import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book.model';

@Component({
  selector: 'app-adz-book-pop-up',
  templateUrl: './adz-book-pop-up.component.html',
  styleUrls: ['./adz-book-pop-up.component.css']
})
export class AdzBookPopUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public book: any) { }

  ngOnInit() {
    if (this.book.desc == undefined) {
      this.book.desc = 'No description available';
    };
    if (this.book.categories == undefined) {
      this.book.categories = ['No category available'];
    };
    if (this.book.pageCount == undefined) {
      this.book.pageCount = 'Not available';
    }
    if (this.book.authors == undefined) {
      this.book.authors = ['Not available'];
    }
    if (this.book.publisher == undefined) {
      this.book.publisher = 'Not available';
    }
  }

}
