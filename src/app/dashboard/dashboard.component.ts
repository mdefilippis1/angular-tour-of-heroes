import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  machines: any = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getMachines();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getMachines(): void {
    this.heroService.getMachines()
    .subscribe(machines => this.machines = machines);

  }


  redirectExt(link) {
    window.location.href = link;
  }
}
