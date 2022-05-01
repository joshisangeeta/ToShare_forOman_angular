import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetalComponent } from './book-detal/book-detal.component';
import { BookMasterComponent } from './book-master/book-master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {
    path:'',redirectTo:'/dashboard',pathMatch:'full' },
    {path:'dashboard',component:DashboardComponent},
    {path:'master',component:BookMasterComponent},
    {path:'addbook',component:AddBookComponent},
    {path:'details/:id',component:BookDetalComponent},
    {path:'edit/:id',component:EditComponent}
    //{path:'delete/:id',component:DeleteComponent},
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
