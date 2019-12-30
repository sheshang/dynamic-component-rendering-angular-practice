import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HeroesService} from './heroes/heroes.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Reusable Angular Components - Tabs</h1>
    <ngx-tabs>
      <ngx-tab tabTitle="Hero List">
        <h1>Hero List</h1>
        <app-heroes-list [heroes]="heroes" (addPerson) = "onAddPerson()"></app-heroes-list>
      </ngx-tab>
      <ngx-tab tabTitle="Hero" [template]="hello" [dataContext]="heroes[0]">
        <h1>Hero</h1>
      </ngx-tab>
    </ngx-tabs>
    <ng-template #hello let-hero="data">
    Hello, {{hero?.name}}!
    </ng-template>
  `,
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild('hello') helloTemplate;
  heroes;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  ngAfterViewInit() {
    console.log(this.helloTemplate);
  }

  
  onAddPerson(){
    this.tabsComponent.openTab();
  }

}
