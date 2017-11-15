import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeSelectComponent} from './recipe-book/recipe-select/recipe-select.component';
import {RecipeDetailComponent} from './recipe-book/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-book/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component:  RecipeSelectComponent},
      {path: 'edit',component: RecipeEditComponent},
      {path: ':id', component:  RecipeDetailComponent},
      {path: ':id/edit',component: RecipeEditComponent},
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}