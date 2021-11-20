import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './body/nav/nav.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { HeaderComponent } from './views/header/header.component';

const routes: Routes = [
{
  path:'',
  component:NavComponent
},
{
  path:'sobre',
  component:TaskListComponent
},
{
  path:'contato',
  component:TaskFormComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
