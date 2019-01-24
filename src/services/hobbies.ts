import { Hobby } from "../data/hobby.interface";

export class HobbiesService {
  private favouriteHobbies: Hobby[] = [];

  addHobbyToFavourites(hobby: Hobby) {
    this.favouriteHobbies.push(hobby);
  }

  removeHobbyToFavourites(hobby: Hobby) {
    const position = this.favouriteHobbies.findIndex((hobbyElement: Hobby) => {
      return hobbyElement.id == hobby.id;
    });
    this.favouriteHobbies.splice(position, 1);
  }

  getFavouriteHobbies() {
    return this.favouriteHobbies.slice();
  }

  isFavourite(hobby: Hobby) {
    return this.favouriteHobbies.find((hobbyElement: Hobby) => {
      return hobbyElement.id == hobby.id;
    });
  }

}
