import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CryptidEntryService } from '../services/cryptid-entry.service';

@Component({
  selector: 'app-list-cryptid-entries',
  templateUrl: './list-cryptid-entries.page.html',
  styleUrls: ['./list-cryptid-entries.page.scss'],
})
export class ListCryptidEntriesPage implements OnInit {

  cryptidEntries: any = []

  constructor(
    private cryptidEntryService: CryptidEntryService,
    private router: Router  
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getAllCryptidEntries();
  }

  getAllCryptidEntries() {
    this.cryptidEntryService.getCryptidEntries()
    .subscribe(entries => {
      console.log(entries);
      this.cryptidEntries = entries;
    });
  }

  showCryptidEntry(cryptidEntry) {
    let entryNav: NavigationExtras = { state: {cryptidEntry} };
    this.router.navigate(['show-cryptid-entry'], entryNav);
  }

  gotoAddCryptidEntry() {
    this.router.navigate(["/add-cryptid-entry"], { state: { undefined } });
  }
}
