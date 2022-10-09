import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular"

@Injectable({
    providedIn: 'root'
})
export class Toaster {
    constructor(
        private toastController: ToastController
    ) { }

    public async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 1500,
            position: 'bottom'
        });

        await toast.present();
    }
}