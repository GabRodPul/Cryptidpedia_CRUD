import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptidEntryService } from '../services/cryptid-entry.service';
import { PhotoService } from '../services/photo.service';
import { Toaster } from '../toaster';

@Component({
  selector: 'app-add-cryptid-entry',
  templateUrl: './add-cryptid-entry.page.html',
  styleUrls: ['./add-cryptid-entry.page.scss'],
})
export class AddCryptidEntryPage implements OnInit {

  formMode: string;
  entry: any;
  cryptidEntryForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  categories = ['UMA', 'OVNI', 'PARANORMAL', 'OCCULT', 'MEME_HAZARD', 'OTHERS']

  constructor(
    public fb: FormBuilder,
    private cryptidEntryService: CryptidEntryService,
    private photoService: PhotoService,
    private router: Router,
    private toaster: Toaster
  ) {
    this.entry = this.router.getCurrentNavigation().extras.state.cryptidEntry;

    if (!this.entry) {
      this.formMode = 'CREATE'
      this.entry = {
        title: '',
        category: this.categories[0],
        description: ''
      }
    } else {
      this.formMode = 'EDIT';
    }
  }

  ionViewWillEnter() {
    this.isSubmitted = false;

    if (this.formMode === 'CREATE') {
      this.cryptidEntryForm.reset();
      this.capturedPhoto = "";
      return;
    }

    this.capturedPhoto = this.entry.filename;
  }

  ngOnInit() {
    this.cryptidEntryForm = this.fb.group({
      title: [this.entry.title, [Validators.required]],
      category: [this.entry.category, [Validators.required]],
      description: [this.entry.description]
    })
  }

  get errorControls() {
    return this.cryptidEntryForm.controls;
  }


  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }


  async submitForm() {
    // DECOMMENT:
    this.isSubmitted = true;
    if (!this.cryptidEntryForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      if (this.formMode === 'CREATE') {
        this.cryptidEntryService.createCryptidEntry(this.cryptidEntryForm.value, blob).subscribe(
          res => {
            this.toaster.presentToast('Entry added succesfully');
            this.router.navigateByUrl("/list-cryptid-entries");
          },
          err => this.toaster.presentToast('Something went wrong while updating')
        )
        return;
      }

      if (this.formMode === 'EDIT') {
        this.entry.title = this.cryptidEntryForm.get('title').value;
        this.entry.description = this.cryptidEntryForm.get('description').value;
        this.cryptidEntryService.updateCryptidEntry(this.entry, blob).subscribe(
          res => {
            this.toaster.presentToast('Entry edited succesfuly');
            this.router.navigateByUrl("/list-cryptid-entries");
          },
          err => this.toaster.presentToast('Something went wrong while updating')
        )
      }
    }
  }
}
