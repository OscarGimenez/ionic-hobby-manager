import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";

import { HobbiesService } from "../../services/hobbies";
import { SettingsService } from "../../services/settings";

import { Hobby } from "../../data/hobby.interface";
import { ModalPage } from "../modal/modal";

@Component({
  selector: "page-favourites",
  templateUrl: "favourites.html"
})
export class FavouritesPage {
  hobbies: Hobby[];

  constructor(
    private settingsService: SettingsService,
    private hobbiesService: HobbiesService,
    private modalCtrl: ModalController,
  ) {}

  ionViewWillEnter() {
    this.hobbies = this.hobbiesService.getFavouriteHobbies();
  }

  onViewHobby(hobby: Hobby) {
    const modal = this.modalCtrl.create(ModalPage, hobby);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavourites(hobby);
        // Other approach
        // this.hobbies = this.hobbiesService.getFavouriteHobbies();
      }
    });
  }

  onRemoveFromFavourites(hobby: Hobby) {
    this.hobbiesService.removeHobbyToFavourites(hobby);
    const position = this.hobbies.findIndex((hobbyElement: Hobby) => {
      return hobbyElement.id == hobby.id;
    });
    this.hobbies.splice(position, 1);
  }

  getBackground() {
    return this.settingsService.isAlternative() ? 'altBackground' : 'primaryBackground';
  }

  //Other approach
  isAltBackground() {
    return this.settingsService.isAlternative();
  }
}
