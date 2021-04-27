import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesGridComponent } from './components/entries-grid/entries-grid.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EntriesPageComponent } from './pages/entries-page/entries-page.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesGridComponent,
    MainLayoutComponent,
    EntriesPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
