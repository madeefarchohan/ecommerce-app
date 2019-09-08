// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
import { LoadingProvider } from '../../providers/loading/loading';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { AlertProvider } from '../../providers/alert/alert';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';

declare var google;

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  errorMessage = '';
  constructor(
    public http: Http,
    public config: ConfigProvider,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
    public navCtrl: NavController,
    public alert: AlertProvider,
    private callNumber: CallNumber,
    private socialSharing: SocialSharing,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  call() {
    this.callNumber.callNumber(this.config.phoneNo, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  whatsapp() {
    this.socialSharing.canShareVia("com.whatsapp").then(() => {
      this.socialSharing.shareViaWhatsAppToReceiver(this.config.phoneNo, "Hello", "", "");
    }).catch(err => this.shared.toast("Whatsapp in not Available"));
  }

  email() {

    this.socialSharing.shareViaEmail("", "Hello Support", this.config.email).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }

}
