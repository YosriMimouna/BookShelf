import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdzSearchInputComponent } from './adz-search-input/adz-search-input.component';
import { AdzSearchResultsComponent } from './adz-search-results/adz-search-results.component';


const routes: Routes = [

  { path: '', component: AdzSearchInputComponent },
  { path: 'results', component: AdzSearchResultsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
