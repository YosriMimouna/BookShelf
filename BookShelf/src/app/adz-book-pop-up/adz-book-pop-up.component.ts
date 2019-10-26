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

  ngOnInit() {}

}
