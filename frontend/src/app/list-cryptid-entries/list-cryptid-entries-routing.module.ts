import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCryptidEntriesPage } from './list-cryptid-entries.page';

const routes: Routes = [
  {
    path: '',
    component: ListCryptidEntriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCryptidEntriesPageRoutingModule {}
