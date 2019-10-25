import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class AdzSearchService {

  constructor(private http: HttpClient, private router: Router) {}

  setSearchWord(searchWord: string) {
    localStorage.setItem('searchWord', searchWord);
    this.router.navigate(['/results']);
  }

  searchRequest(searchWord: string) {
    return this.http
      .get('https://www.googleapis.com/books/v1/volumes?q=' + searchWord);
    }
}
