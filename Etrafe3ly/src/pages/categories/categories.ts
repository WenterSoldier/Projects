import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase' 
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }
  lawyers:any[] = [];
  retrieveDataOfLawyers(cat:string) {
      firebase.database().ref('Lawyers').orderByChild('degreeOfEnrollment').equalTo(cat).on('value',(data)=>{
          const recieved = this.snaptoObject(data);
          this.lawyers.push(recieved)
      })
  }


  snaptoObject(snap) { // to get data from db and put it into array
    let array = [];
    snap.forEach(element => {
      let item = element.val();
      item.key = element.key;
      array.push(item);
    });
    return array[0];
  }
}
