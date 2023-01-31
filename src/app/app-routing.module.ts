import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

const routes: Routes = [
  {
    path:'**',
    redirectTo: 'layout/body'
  },
  {
    path:'layout',
    component:ContentLayoutComponent,
    children:[
      {
        path: 'body',
        component: BodyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
