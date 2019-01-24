import { Component, OnInit } from '@angular/core';

import { Hobby } from '../../data/hobby.interface';

import hobbies from '../../data/hobbies';

@Component({
  selector: 'page-hobbies',
  templateUrl: 'hobbies.html',
})
export class HobbiesPage implements OnInit {
  hobbyList: {category: string, hobbies: Hobby[], icon: string}[];

  ngOnInit() {
    this.hobbyList = hobbies;
  }

}
