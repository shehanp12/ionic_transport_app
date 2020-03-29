import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service'
import {Item} from '../model'

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.page.html',
  styleUrls: ['./driver-login.page.scss'],
})
export class DriverLoginPage implements OnInit {
  item: Item={
    start:'',
    email:'',

  }

  constructor(
    public itemService: ItemService,
   
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items =>{
      console.log(items)
    })

   
  
  }

  onSubmit(){
    this.itemService.addItem(this.item)
  }

 
}
