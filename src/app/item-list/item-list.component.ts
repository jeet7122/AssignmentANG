import { Component } from '@angular/core';
import {Items} from "../models/items";
import {NgForOf} from "@angular/common";
import {ItemDescriptionComponent} from "../item-description/item-description.component";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgForOf,
    ItemDescriptionComponent
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  Menu:string [] = ["id", "productName", "productDescription", "price", "InCart"];
  MenuItems:Items [] = [{id:1, productName: "Strawberry-Icecream", productDescription: "Lovely pieces of strawberry cheese cake assembled with cream", price: 9.99, InCart:true },
    {id:2, productName: "Choco- Oreo Icecream", productDescription: "Mouth-watering crumbs of chocolate cookies with vanilla cream", price: 8.99, InCart:true },
    {id:3, productName: "Mango Icecream", productDescription: "Slices of Mango cheese cake assembled with cream", price: 7.99, InCart:true },
    {id:3, productName: "Butter Scotch Icecream", productDescription: "Crumbs of crunchy small balls with butter cream", price: 7.99, InCart:false }
  ];
  selectedItem?:Items;

  selectItem(item : Items): void{
    this.selectedItem = item;
  }


}
