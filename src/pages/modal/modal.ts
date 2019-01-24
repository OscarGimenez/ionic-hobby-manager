import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

@Component({
  selector: "page-modal",
  templateUrl: "modal.html"
})
export class ModalPage {
  name: string;
  description: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    this.description = this.navParams.get('description');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
