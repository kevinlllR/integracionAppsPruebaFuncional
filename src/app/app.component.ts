import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/superheroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a [routerLink]="['/compose2/palpa',{ outlets: { popup4: ['example'] } }]">Contact</a>
      <a [routerLink]="['/compose',{ outlets: { popup5: ['pulpo'] } }]">Pulpo</a>
      
      <a [routerLink]="['/compose',{ outlets: { popup5:['z','example'] } }]">Pulpa</a>
      
      <a [routerLink]="['/compose',{ outlets: { popup4: ['y','x'] } }]">Example</a>
      
      
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup4"></router-outlet>
    <router-outlet name="popup5"></router-outlet>
    <router-outlet name="popup2"></router-outlet>
    
    `
})
export class AppComponent {
}
