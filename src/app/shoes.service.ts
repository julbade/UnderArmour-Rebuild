import { Injectable } from '@angular/core';
import { Shoes } from './shoes.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShoesService {
  shoes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.shoes = database.list('shoes');
  }

  getShoes(){
    return this.shoes;
  }

  addShoes(newShoes: Shoes) {
    this.shoes.push(newShoes);
  }

  getShoesById(shoesId: string){
  return this.database.object('/shoes/' + shoesId)
  }

  updateShoes(localUpdatedShoes){
    var shoesEntryInFirebase = this.getShoesById(localUpdatedShoes.$key);
    shoesEntryInFirebase.update({name: localUpdatedShoes.name,
                                price: localUpdatedShoes.price,
                                size: localUpdatedShoes.size});
  }

  deleteShoes(localShoesToDelete){
  var shoesEntryInFirebase = this.getShoesById(localShoesToDelete.$key);
  shoesEntryInFirebase.remove();
  }

}
