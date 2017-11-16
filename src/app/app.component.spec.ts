import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { shoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe-book/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeSelectComponent } from './recipe-book/recipe-select/recipe-select.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        HttpModule, 
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        ShoppingListEditComponent,
        DropdownDirective,
        RecipeSelectComponent,
        RecipeEditComponent
      ],
      providers: [shoppingListService, RecipeService, DataStorageService, {provide: APP_BASE_HREF, useValue : '/' }],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('regarding the view', () => {
    it('should render the app-header', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-header')).not.toBeNull()
    }));

    it('should render the app container', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div.container')).not.toBeNull()
    }));

    it('should render the router-outlet within app container', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div.container router-outlet')).not.toBeNull()
    }));
  });
});
