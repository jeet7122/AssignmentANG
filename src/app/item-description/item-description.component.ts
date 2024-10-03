import {Component, Input} from '@angular/core';
import {Items} from "../models/items";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.scss'
})
export class ItemDescriptionComponent {
  @Input() item?:Items;
  toggleCart(item: Items){
    item.InCart = !item.InCart;
  }

}
