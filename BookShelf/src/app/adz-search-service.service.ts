import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class AdzSearchService {

  private filterQuery = '';
  constructor(private http: HttpClient, private router: Router) {}

  setSearchWord(searchWord: string) {
    this.filterQuery = '';
    localStorage.clear();
    localStorage.setItem('searchWord', searchWord);
    this.router.navigate(['/results']);
  }

  setSearchParams(filterWord: string, filter: string) {
    localStorage.setItem('filter', filter);
    localStorage.setItem('filterWord', filterWord);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/results']);
  }

  searchRequest(searchWord: string, pageNumber: number) {
    const skip = (pageNumber * 10);
    return this.http
      .get('https://www.googleapis.com/books/v1/volumes?q=' + searchWord + this.filterQuery + '&startIndex=' + skip);
  }

  setQuery(filter: string, filterWord: string) {
    let query = '';
    filterWord = filterWord.toLowerCase();
    if (filter == 'Author') {
      query = query + '+inauthor:' + filterWord;
    } else if (filter == 'Category') {
      query = query + '+subject:' + filterWord;
    }
    this.filterQuery = query;
  }
}
