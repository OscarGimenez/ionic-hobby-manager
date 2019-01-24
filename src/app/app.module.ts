import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavouritesPage } from '../pages/favourites/favourites';
import { HobbiesPage } from '../pages/hobbies/hobbies';
import { HobbyPage } from '../pages/hobbies/hobby/hobby';
import { SettingsPage } from '../pages/settings/settings';
import { SectionsPage } from '../pages/sections/sections';
import { TabsPage } from '../pages/tabs/tabs';
import { HobbiesService } from '../services/hobbies';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavouritesPage,
    SectionsPage,
    HobbiesPage,
    HobbyPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavouritesPage,
    SectionsPage,
    HobbiesPage,
    HobbyPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HobbiesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
