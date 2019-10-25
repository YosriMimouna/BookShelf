import { Component, OnInit, Input } from '@angular/core';
import { AdzSearchService } from '../adz-search-service.service';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig, PageEvent } from '@angular/material';
import { AdzBookPopUpComponent } from '../adz-book-pop-up/adz-book-pop-up.component';

@Component({
  selector: 'app-adz-search-results',
  templateUrl: './adz-search-results.component.html',
  styleUrls: ['./adz-search-results.component.css']
})
export class AdzSearchResultsComponent implements OnInit {

  private isLoading = false;
  private pageSize = 10;
  private totalBooks: number;
  private searchWord: string;
  private bookSub: Subscription;
  private bookList: Book[] = [];
  private currentPage = 1;
  constructor(public searchService: AdzSearchService, public bookDialog: MatDialog) { }

  ngOnInit() {
    this.isLoading = true;
    this.searchWord = localStorage.getItem('searchWord');
    this.bookSub = this.searchService.searchRequest(this.searchWord, this.currentPage - 1).subscribe((bookData) => {
      const countItems = 'totalItems';
      if (bookData.hasOwnProperty(countItems)) {
        this.totalBooks = parseInt(bookData[countItems]);
      }
      let bookInstance: Book;
      const key = 'items';
      if (bookData.hasOwnProperty(key)) {
        for (let book of bookData[key]) {
          bookInstance = {
            id: book.id,
            descTitle: book.volumeInfo.title,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            publisher: book.volumeInfo.publisher,
            desc: book.volumeInfo.description,
            img: '',
            categories: book.volumeInfo.categories,
            pageCount: book.volumeInfo.pageCount
          };

          if ( bookInstance.title.length > 180 ) {
            bookInstance.descTitle = bookInstance.title.substr(0, 179) + '...';
          }
          if ((book.volumeInfo.hasOwnProperty('imageLinks'))) {
            bookInstance.img = book.volumeInfo.imageLinks.smallThumbnail;
          } else {
            bookInstance.img = 'http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg';
          }

          this.bookList.push(bookInstance);
        }
        this.isLoading = false;
      }
    });
  }

  onClick(book: Book) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minHeight = '550px';
    dialogConfig.maxHeight = '700px';
    dialogConfig.minWidth = '700px';
    dialogConfig.data = book;
    this.bookDialog.open(AdzBookPopUpComponent, dialogConfig);
    console.log(book);
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = this.currentPage + 1;
    this.bookList = [];
    this.bookSub = this.searchService.searchRequest(this.searchWord, this.currentPage - 1).subscribe((bookData) => {
      const countItems = 'totalItems';
      if (bookData.hasOwnProperty(countItems)) {
        this.totalBooks = parseInt(bookData[countItems]);
      }
      let bookInstance: Book;
      const key = 'items';
      if (bookData.hasOwnProperty(key)) {
        for (let book of bookData[key]) {
          bookInstance = {
            id: book.id,
            descTitle: book.volumeInfo.title,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            publisher: book.volumeInfo.publisher,
            desc: book.volumeInfo.description,
            img: '',
            categories: book.volumeInfo.categories,
            pageCount: book.volumeInfo.pageCount
          };

          if ( bookInstance.title.length > 180 ) {
            bookInstance.descTitle = bookInstance.title.substr(0, 179) + '...';
          }
          if ((book.volumeInfo.hasOwnProperty('imageLinks'))) {
            bookInstance.img = book.volumeInfo.imageLinks.smallThumbnail;
          } else {
            bookInstance.img = 'http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg';
          }

          this.bookList.push(bookInstance);
        }
        this.isLoading = false;
      }
    });

  }
}
