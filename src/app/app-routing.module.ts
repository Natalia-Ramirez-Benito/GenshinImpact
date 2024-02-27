import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'artefactos',
    loadChildren: () => import('./artefactos/artefactos.module').then( m => m.ArtefactosPageModule)
  },
  {
    path: 'armas',
    loadChildren: () => import('./armas/armas.module').then( m => m.ArmasPageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./materiales/materiales.module').then( m => m.MaterialesPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./recursos/recursos.module').then( m => m.RecursosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
