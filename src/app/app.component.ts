import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Items} from "./models/items";
import {NgForOf} from "@angular/common";
import {ItemListComponent} from "./item-list/item-list.component";
import {ItemDescriptionComponent} from "./item-description/item-description.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent, ItemDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = "Assignment 3";

}
