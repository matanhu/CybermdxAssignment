import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesPageComponent } from './pages/entries-page/entries-page.component';

const routes: Routes = [
  {path: '', component: EntriesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
