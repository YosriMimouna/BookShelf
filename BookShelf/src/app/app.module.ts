import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AdzHeaderComponent } from './adz-header/adz-header.component';
import { AdzSearchInputComponent } from './adz-search-input/adz-search-input.component';
import { AdzSearchResultsComponent } from './adz-search-results/adz-search-results.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule, MatListModule, MatDialogModule } from '@angular/material';
import { AdzBookPopUpComponent } from './adz-book-pop-up/adz-book-pop-up.component';




@NgModule({
  declarations: [
    AppComponent,
    AdzHeaderComponent,
    AdzSearchInputComponent,
    AdzSearchResultsComponent,
    AdzBookPopUpComponent
  ],
  entryComponents: [
    AdzBookPopUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
