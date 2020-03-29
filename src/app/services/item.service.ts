import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore'
import {Observable } from 'rxjs'
import {Item} from  '../model'
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;



  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();


  }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.itemsCollection.add(item); 
  }


  }
