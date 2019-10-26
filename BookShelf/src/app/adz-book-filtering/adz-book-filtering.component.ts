import { Component, OnInit } from '@angular/core';
import { AdzSearchService } from '../adz-search-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'adz-book-filtering',
  templateUrl: './adz-book-filtering.component.html',
  styleUrls: ['./adz-book-filtering.component.css']
})
export class AdzBookFilteringComponent implements OnInit {

  private selectedFilter: string;
  private filters = ['Author', 'Category'];
  constructor(public searchService: AdzSearchService) { }

  ngOnInit() {
  }

  onSubmit(filterForm: NgForm) {
    if(!(filterForm.value.filterWord == '') && !(this.selectedFilter == undefined)) {
      this.searchService.setSearchParams(filterForm.value.filterWord, this.selectedFilter);
    }
  }
}
