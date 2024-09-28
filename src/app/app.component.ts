import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Items} from "./models/items";
import {NgForOf} from "@angular/common";
import {ItemListComponent} from "./item-list/item-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
