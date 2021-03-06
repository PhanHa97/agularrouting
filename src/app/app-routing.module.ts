import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home-tempalte - localhost : 4200
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-template/home-template.module').then(
        (m) => m.HomeTemplateModule
      ),
  },
  // admin template - localhost: 4200/admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-template/admin-template.module').then(
        (m) => m.AdminTemplateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
