import { Component, Input, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase' 
import { UserDataProvider } from '../../providers/user-data/user-data';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the CategoriesRetrievalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories-retrieval',
  templateUrl: 'categories-retrieval.html',
})
export class CategoriesRetrievalPage {

  //attributes
  userDataObj:UserDataProvider;
  _Database:DatabaseProvider

  constructor(public navCtrl: NavController, public navParams: NavParams,
    db:UserDataProvider
    /* public modalCtrl: ModalController*/) {
      this.userDataObj=db
  }

  ionViewDidLoad() {
    this.retrieveDataOfLawyers(this.navParams.data);
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
  
  ionViewWillEnter(){
        //test
        console.log(this.navParams.data);

        //retrieva the data
  }

    move2Lawyer(lawyer:any){
    this.userDataObj.lawyerData=lawyer
    this.navCtrl.push("LawyerProfilePage")
  }
  //
  
  
}
