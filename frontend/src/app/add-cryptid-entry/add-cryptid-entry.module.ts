import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCryptidEntryPageRoutingModule } from './add-cryptid-entry-routing.module';

import { AddCryptidEntryPage } from './add-cryptid-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddCryptidEntryPageRoutingModule
  ],
  declarations: [AddCryptidEntryPage]
})
export class AddCryptidEntryPageModule {}
