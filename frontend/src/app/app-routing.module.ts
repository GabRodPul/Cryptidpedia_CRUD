import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-cryptid-entry',
    loadChildren: () => import('./add-cryptid-entry/add-cryptid-entry.module').then( m => m.AddCryptidEntryPageModule)
  },
  {
    path: 'list-cryptid-entries',
    loadChildren: () => import('./list-cryptid-entries/list-cryptid-entries.module').then( m => m.ListCryptidEntriesPageModule)
  },
  {
    path: 'show-cryptid-entry',
    loadChildren: () => import('./show-cryptid-entry/show-cryptid-entry.module').then( m => m.ShowCryptidEntryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
