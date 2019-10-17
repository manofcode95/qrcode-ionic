import { Component } from "@angular/core";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { ToastController } from "@ionic/angular";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"]
})
export class HomePage {
    qrData = "QR Testing";
    elementType: "canvas" | "img" | "url" = "canvas";
    scannedCode: any;

    constructor(
        private base64ToGallery: Base64ToGallery,
        private barcodeScanner: BarcodeScanner,
        private toastCtrl: ToastController
    ) {}

    scanCode() {
        this.barcodeScanner.scan().then((barcodeData: any) => {
            console.log(barcodeData);
            this.scannedCode = barcodeData.text;
        });
    }
}
