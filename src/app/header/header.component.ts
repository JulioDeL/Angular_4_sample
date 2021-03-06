import { Component, OnInit} from '@angular/core';
import { DataStorageService } from './../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        response => console.log(response),
        error => console.log(error),
      );
  }

  fetchData() {
    this.dataStorageService.getRecipes();
  }
}
