import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./vistas/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./vistas/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./vistas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./vistas/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./vistas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./vistas/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./vistas/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'view-admin',
    loadChildren: () => import('./vistas/view-admin/view-admin.module').then( m => m.ViewAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
