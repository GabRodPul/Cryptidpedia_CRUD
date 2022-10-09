import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCryptidEntryPage } from './show-cryptid-entry.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCryptidEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCryptidEntryPageRoutingModule {}
