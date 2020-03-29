import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../model';


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.page.html',
  styleUrls: ['./details-card.page.scss'],
})
export class DetailsCardPage implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;


  constructor(public itemService: ItemService) { }


  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      /* console.log(items); */
       this.items = items;
    });
  }

}
