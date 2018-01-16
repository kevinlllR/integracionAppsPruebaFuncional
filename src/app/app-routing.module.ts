import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { PulpoComponent } from './pulpo/pulpo.component';
import { PulpaComponent } from './pulpa/pulpa.component';
import { ProComponent } from './pro/pro.component';

const appRoutes: Routes = [
  {
    path: 'compose',
    children: [
      {
        path: 'y',
        component:ProComponent,
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
        outlet:"popup4"
      },
      {

        path: 'z',
        component: ProComponent,
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
        outlet: 'popup5'
      },
      {

        path: 'pulpa',
        component: PulpaComponent,
        outlet: 'popup5'
      }

    ],
  },
  {
    path: 'compose2',
    children: [
      {
        path: 'palpa',
        loadChildren: 'app/admin/admin.module#AdminModule',
      }]
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
