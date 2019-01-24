import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";

import { Hobby } from "../../data/hobby.interface";
import hobbies from "../../data/hobbies";

import { HobbyPage } from "./hobby/hobby";

@Component({
  selector: "page-hobbies",
  templateUrl: "hobbies.html"
})
export class HobbiesPage implements OnInit {
  hobbyList: { category: string; hobbies: Hobby[]; icon: string }[];
  hobbyPage = HobbyPage;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.hobbyList = hobbies;
  }
}
