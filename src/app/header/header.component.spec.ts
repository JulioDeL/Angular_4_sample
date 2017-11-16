import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import 'rxjs/add/observable/of';

import { HeaderComponent } from './header.component';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipe-book/recipe.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let dataStorageService: DataStorageService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ HeaderComponent ],
      providers: [DataStorageService, RecipeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  describe('regarding the component methods', () => {
    describe('.fetchData', () => {
      beforeEach(() => {
        dataStorageService = fixture.debugElement.injector.get(DataStorageService);
        spyOn(dataStorageService, 'getRecipes')
      });

      it('should get recipes', () => {
        component.fetchData();
        expect(dataStorageService.getRecipes).toHaveBeenCalled();
      });
    });

     describe('.onSaveData', () => {
      beforeEach(() => {
        dataStorageService = fixture.debugElement.injector.get(DataStorageService);
        spyOn(dataStorageService, 'storeRecipes').and.returnValue(Observable.of('OK'));
      });

      it('should store recipes', () => {
        component.onSaveData();
        expect(dataStorageService.storeRecipes).toHaveBeenCalled();
      });
    });
  });

  describe('regarding the view', () => {
    it('should be a navbar', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('nav.navbar')).not.toBeNull()
    });

    it('should have home hyperlink', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const homeHyperLink = fixture.debugElement.nativeElement.querySelector('a[name="home"]');
      expect(homeHyperLink).not.toBeNull();
      expect(homeHyperLink.getAttribute("routerLink")).toBe('/');
    });

    it('should have recipes hyperlink', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const homeHyperLink = fixture.debugElement.nativeElement.querySelector('a[name="recipes-link"]');
      expect(homeHyperLink).not.toBeNull();
      expect(homeHyperLink.getAttribute("routerLink")).toBe('/recipes');
    });

    it('should have shopping list hyperlink', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const homeHyperLink = fixture.debugElement.nativeElement.querySelector('a[name="shopping-list-link"]');
      expect(homeHyperLink).not.toBeNull();
      expect(homeHyperLink.getAttribute("routerLink")).toBe('/shopping-list');
    });
  });
});
