import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCryptidEntryPageRoutingModule } from './show-cryptid-entry-routing.module';

import { ShowCryptidEntryPage } from './show-cryptid-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCryptidEntryPageRoutingModule
  ],
  declarations: [ShowCryptidEntryPage]
})
export class ShowCryptidEntryPageModule {}
