// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Component, ApplicationRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { Http } from '@angular/http';
import { AlertProvider } from '../../providers/alert/alert';
import { LoadingProvider } from '../../providers/loading/loading';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ProductsPage } from '../products/products';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  search;
  searchResult = [];
  showCategories = true;
  count = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public config: ConfigProvider,
    public http: Http,
    public alert: AlertProvider,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
    public applicationRef: ApplicationRef
  ) {

  }

  onChangeKeyword = function (e) {
    //console.log(this.search);
    // if (search != undefined) {
    //rchResult = [];
    //  }
  }
  getSearchData = function () {
    if (this.search != undefined) {
      if (this.search == null || this.search == '') {
        this.shared.toast("Please enter something");
        return 0;
      }
    }
    else {
      this.shared.toast("Please enter something");
      return 0;
    }

    let string = this.search;
    let matches = string.match(/\d+/g);  // creates array from matches
    console.log(matches);
    var str = this.search;
    let searchKeywords = str.replace(/[0-9]/g, ' ');;
    console.log(searchKeywords);

    this.loading.show();
    this.config.Woocommerce.getAsync("products?status=publish&per_page=50&search=" + searchKeywords).then((data) => {

      this.searchResult = JSON.parse(data.body);
      console.log(matches);
      if (matches == null) {
        this.loading.hide();
        if (this.searchResult.length == 0) {
          this.shared.toast("No Product found!");
        }
      }
      else if (matches.length == 0) {
        this.loading.hide();
        if (this.searchResult.length == 0) {
          this.shared.toast("No Product found!");
        }
      }
      else if (matches.length != 0) {
        this.getProductsByIds(matches);
      }

      this.applicationRef.tick();
    });
  };
  getProductsByIds(matches) {
    this.config.Woocommerce.getAsync("products/?include=" + matches).then(data => {
      this.loading.hide();
      let d = JSON.parse(data.body);
      for (let v of d) {
        this.searchResult.unshift(v);
      }
      if (this.searchResult.length == 0) {
        this.shared.toast("No Product found!");
      }
      this.applicationRef.tick();
    });

  }
  openProducts(id, name) {
    this.navCtrl.push(ProductsPage, { id: id, name: name });
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
}
