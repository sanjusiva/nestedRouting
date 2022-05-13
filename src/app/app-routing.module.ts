import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
  path: 'grand', component: GrandParentComponent,
  children: [
    { path: 'parent', component: ParentComponent ,
    children: [
      { path: 'child', component: ChildComponent }
    ]}
  ]
},
{ path: '**', redirectTo: 'grand' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
