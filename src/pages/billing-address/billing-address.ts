// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Component, ApplicationRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { SelectCountryPage } from '../select-country/select-country';
import { SelectZonesPage } from '../select-zones/select-zones';
import { ShippingMethodPage } from '../shipping-method/shipping-method';
import { LocationDataProvider } from '../../providers/location-data/location-data';
import { ConfigProvider } from '../../providers/config/config';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-billing-address',
  templateUrl: 'billing-address.html',
})
export class BillingAddressPage {
  defaultAddress = false;
  name = "";
  phone = "";
  price = "";
  constructor(
    public navParams: NavParams,
    public config: ConfigProvider,
    //public http: Http,
    public shared: SharedDataProvider,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public location: LocationDataProvider,
    private applicationRef: ApplicationRef,
    // public loading: LoadingProvider, 
  ) {

  }
  submit() {
    //this.shared.shipping.address_2 = "Name : " + this.name + ", Price : " + this.price + ", Phone : " + this.phone;
    // this.navCtrl.push(ShippingMethodPage);
    // this.applicationRef.tick();
    if (this.config.checkOutPage == 2) this.navCtrl.push(OrderPage);
    else this.openOrderPage();
  }
  //=====================================================================================================================
  openOrderPage() {
    let customer_id = 0;// <!-- 2.0 updates -->
    if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;// <!-- 2.0 updates -->
    let token = null;// <!-- 2.0 updates -->
    if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;// <!-- 2.0 updates -->
    let onePage = this.config.checkOutPage;

    var data = {
      token: token,// <!-- 2.0 updates -->
      // payment_method: this.selectedPaymentMethod,
      // payment_method_title: this.selectedPaymentMethodTitle,
      billing_info: this.shared.billing,
      shipping_info: this.shared.shipping,
      products: this.getProducts(),
      shipping_ids: this.shared.shipping_lines,
      coupons: this.getCoupons(),
      customer_note: "",
      customer_id: customer_id,// <!-- 2.0 updates -->
      sameAddress: this.shared.sameAddress,
      one_page: onePage,
      platform: this.shared.device,
    };
    console.log(data);
    this.shared.openCheckoutWebview(data);
  }
  //=================================================================================================================================
  getProducts() {
    var data = [];
    for (let v of this.shared.cartProducts) {
      var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
      if (v.variation_id) Object.assign(obj, { variation_id: v.variation_id })
      //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
      data.push(obj);
    }
    return data;
  }
  //=================================================================================================================================
  //Object.assign(c, JSON.parse(data.body)
  getCoupons() {
    var data = [];
    for (let v of this.shared.couponArray) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
}
