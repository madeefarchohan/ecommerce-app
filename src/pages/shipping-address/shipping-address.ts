// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Component, ApplicationRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { Http } from '@angular/http';
import { LoadingProvider } from '../../providers/loading/loading';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { SelectCountryPage } from '../select-country/select-country';
import { SelectZonesPage } from '../select-zones/select-zones';
import { BillingAddressPage } from '../billing-address/billing-address';
import { LocationDataProvider } from '../../providers/location-data/location-data';


@Component({
  selector: 'page-shipping-address',
  templateUrl: 'shipping-address.html',
})
export class ShippingAddressPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public config: ConfigProvider,
    public http: Http,
    public shared: SharedDataProvider,
    public modalCtrl: ModalController,
    public loading: LoadingProvider,
    public applicationRef: ApplicationRef,
    public location: LocationDataProvider) {
    console.log(this.shared.customerData);
    if (this.shared.customerData.id != null) {
      this.shared.shipping = this.shared.customerData.shipping;
      this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
      this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
    }


  }
  submit() {
    console.log(this.shared.billing);
    this.navCtrl.push(BillingAddressPage);
  }
  selectCountryPage() {
    let modal = this.modalCtrl.create(SelectCountryPage, { page: 'shipping' });
    modal.present();
  }
  selectZonePage() {
    let modal = this.modalCtrl.create(SelectZonesPage, { page: 'shipping' });
    modal.present();
  }
  ngOnInit() {
    setTimeout(() => {
      this.refreshPage();
    }, 500);

  }

  refreshPage() {
    this.applicationRef.tick();
  }
}

