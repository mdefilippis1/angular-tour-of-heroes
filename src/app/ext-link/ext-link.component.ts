import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-ext-link',
  templateUrl: './ext-link.component.html',
  styleUrls: ['./ext-link.component.css']
})
export class ExtLinkComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  redirect() {
    window.location.href = this.hero.link;
  }

}
