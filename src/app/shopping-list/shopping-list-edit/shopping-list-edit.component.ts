import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppingListService} from '../shopping-list.service'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ingredientForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  selectedIngredient: Ingredient;
  selectedIngredientIndex: number;

  constructor(private shoppingListService: shoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.shoppingListItemSelected.subscribe(
      (selectedIngredientIndex: number) => {
        this.selectedIngredientIndex = selectedIngredientIndex;
        this.editMode = true;
        this.selectedIngredient = this.shoppingListService.getIngredient(selectedIngredientIndex);
        this.ingredientForm.setValue({
          name: this.selectedIngredient.name,
          amount: this.selectedIngredient.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearForm() {
    this.ingredientForm.reset();
    this.editMode = false;
    this.selectedIngredientIndex = null;
    this.selectedIngredient = null;
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.selectedIngredientIndex);
    this.clearForm();
  }

  onSubmit (form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.editMode ? this.shoppingListService.updateIngredient(this.selectedIngredientIndex, newIngredient) : this.shoppingListService.addIngredient(newIngredient);
    this.clearForm();
  }
}
