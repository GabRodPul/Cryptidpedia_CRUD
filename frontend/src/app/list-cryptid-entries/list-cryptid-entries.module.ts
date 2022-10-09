import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCryptidEntriesPageRoutingModule } from './list-cryptid-entries-routing.module';

import { ListCryptidEntriesPage } from './list-cryptid-entries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCryptidEntriesPageRoutingModule
  ],
  declarations: [ListCryptidEntriesPage]
})
export class ListCryptidEntriesPageModule {}
