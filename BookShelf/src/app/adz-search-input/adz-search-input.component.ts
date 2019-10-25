import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdzSearchService } from '../adz-search-service.service';

@Component({
  selector: 'app-adz-search-input',
  templateUrl: './adz-search-input.component.html',
  styleUrls: ['./adz-search-input.component.css']
})
export class AdzSearchInputComponent implements OnInit {

  constructor(public searchService: AdzSearchService) { }

  ngOnInit() {
  }

  onSearch(form: NgForm) {
    this.searchService.setSearchWord(form.value.searchWord);
  }

}
