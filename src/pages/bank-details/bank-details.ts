import { Component, ApplicationRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { ConfigProvider } from '../../providers/config/config';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Http } from '@angular/http';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the BankDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage {
  form = { name: '', accountNo: '', code: "" };
  fields = [];
  errorMessage: string;
  constructor(public navCtrl: NavController,
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    public loading: LoadingProvider,
    public http: Http,
    private applicationRef: ApplicationRef,
    public navParams: NavParams) {
  }

  submit() {
    this.loading.show();
    this.errorMessage = '';
    let query = "user_id=" + this.shared.customerData.id;
    let d = [];
    for (let x of this.fields) {
      d.push({ id: x.field_id, value: x.value });
    }
    query += "&user_info=" + JSON.stringify(d);
    this.http.get(this.config.url + '/api/appusers/ionic_extra_fields_data/?' + query).map(res => res.json()).subscribe(data => {
      this.loading.hide();
      this.shared.toast(data);
      this.errorMessage = data;

    }, err => {
      this.loading.hide();
      if (err.ok == false) {
        this.errorMessage = "server error!";
      }
    });
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }
  getFields() {
    this.loading.show();
    this.http.get(this.config.url + '/api/appusers/ionic_extra_fields/').map(res => res.json()).subscribe(data => {
      this.loading.hide();
      if (data.status == "ok") {
        for (let value of data.data) {
          this.fields.push(Object.assign(value, { value: null }));
        }
        this.getInfo();
      }
      else {
        this.errorMessage = data.error;
      }
    }, err => {
      this.loading.hide();
      if (err.ok == false) {
        this.errorMessage = "server error!";
      }
    });
  }
  getInfo() {
    this.loading.show();
    this.http.get(this.config.url + '/api/appusers/ionic_extra_fields_info/?user_id=' + this.shared.customerData.id).map(res => res.json()).subscribe(data => {
      this.loading.hide();
      let tempArray = [];
      if (data.status == "ok") {
        for (let x of data.data) {
          for (let y of this.fields) {
            if (x.field_id == y.field_id) { y.value = x.user_value; }
          }
        }

      }
      else {
        this.errorMessage = data.error;
      }
    }, err => {
      this.loading.hide();
      if (err.ok == false) {
        this.errorMessage = "server error!";
      }
    });
  }

  ionViewDidLoad() {
    this.getFields();
  }

}
