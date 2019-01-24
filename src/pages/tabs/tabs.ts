import { Component } from '@angular/core';

import { FavouritesPage } from '../favourites/favourites';
import { HobbiesPage } from '../hobbies/hobbies';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  favouritesPage = FavouritesPage;
  hobbiesPage = HobbiesPage;
}
