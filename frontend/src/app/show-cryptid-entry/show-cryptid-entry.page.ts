import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CryptidEntryService } from '../services/cryptid-entry.service';
import { Toaster } from '../toaster';

@Component({
  selector: 'app-show-cryptid-entry',
  templateUrl: './show-cryptid-entry.page.html',
  styleUrls: ['./show-cryptid-entry.page.scss'],
})
export class ShowCryptidEntryPage implements OnInit {

  entry: any = {};

  constructor(
    private router: Router,
    private toaster: Toaster,
    private cryptidEntryService: CryptidEntryService
    ) {
    this.entry = this.router.getCurrentNavigation().extras.state.cryptidEntry;
  }

  ionViewDidEnter() { }

  ngOnInit() {
  }

  editCryptidEntry() {
    let cryptidEntry = this.entry;
    let entryNav: NavigationExtras = { state: {cryptidEntry} };
    console.log("eh?")
    this.router.navigate(['add-cryptid-entry'], entryNav);
  }

  removeCryptidEntry() {
    if (!confirm('Are you sure you want to delete this entry?')) {
      return;
    }

    this.cryptidEntryService.deleteCryptidEntry(this.entry.id)
    .subscribe(
      res => {
        this.toaster.presentToast('Entry deleted succesfully');
        this.router.navigateByUrl('list-cryptid-entries');
      },
      err => this.toaster.presentToast('Something went wrong while deleting')
    );
  }
}