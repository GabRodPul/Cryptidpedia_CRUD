import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCryptidEntryPage } from './add-cryptid-entry.page';

const routes: Routes = [
  {
    path: '',
    component: AddCryptidEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCryptidEntryPageRoutingModule {}
