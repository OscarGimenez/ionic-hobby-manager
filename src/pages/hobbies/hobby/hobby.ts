import { Component, OnInit } from "@angular/core";
import { NavParams, AlertController } from "ionic-angular";
import { Hobby } from "../../../data/hobby.interface";
import { HobbiesService } from "../../../services/hobbies";

@Component({
  selector: "page-hobby",
  templateUrl: "hobby.html"
})
export class HobbyPage implements OnInit {
  hobbieCategory: { category: string; hobbies: Hobby[]; icon: string };

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private hobbiesService: HobbiesService
  ) {}

  //   Don't forget to add (?) in template to use this approach -> hobbies?.category
  // ionViewDidLoad() {
  //   this.hobbies = this.navParams.data;
  // }

  //Other approach
  ngOnInit() {
    this.hobbieCategory = this.navParams.data;
  }

  onAddToFavourite(selectedHobby: Hobby) {
    const alert = this.alertCtrl.create({
      title: 'Add Hobby',
      subTitle: selectedHobby.name,
      message: 'Do you want to mark this hobby to your favourites?',
      buttons: [
        {
          text: 'Yes, of course',
          handler: () => {
            this.hobbiesService.addHobbyToFavourites(selectedHobby);
          }
        },
        {
          text: 'No, sorry!!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavourites(hobby: Hobby){
    this.hobbiesService.removeHobbyToFavourites(hobby);
  }

  isFavourite(hobby: Hobby) {
    return this.hobbiesService.isFavourite(hobby);
  }
}
