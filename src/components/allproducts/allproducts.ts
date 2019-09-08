import { Component, Input, ApplicationRef } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { NavController, NavParams, ModalController, Events, Platform, ToastController } from 'ionic-angular';
import { ProductDetailPage } from '../../pages/product-detail/product-detail';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { TranslateService } from '@ngx-translate/core';
import { CartPage } from '../../pages/cart/cart';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@Component({
  selector: 'allproducts',
  templateUrl: 'allproducts.html'
})
export class AllproductsComponent {

  @Input('data') p;//product data
  @Input('type') type;
  public isLiked = 0;
  public wishArray = [];
  price_html: string;
  fileName = '';

  // @Output() someEvent = new EventEmitter();
  constructor(
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public events: Events,
    private storage: Storage,
    public http: Http,
    public loading: LoadingProvider,
    public alert: AlertProvider,
    private socialSharing: SocialSharing,
    public translate: TranslateService,
    private applicationRef: ApplicationRef,
    private transfer: FileTransfer, private file: File, private platform: Platform, private toastCtrl: ToastController

  ) {

    events.subscribe('wishListUpdate', (id, value) => {
      if (id == this.p.id) this.isLiked = value;
    });
    this.storage.get('wishListProducts').then((val) => {
      this.wishArray = val;
      this.checkWishList();
    });
  }
  checkWishList() {
    //getting wishList items from local storage
    let count = 0;
    if (this.wishArray != null)
      for (let value of this.wishArray) {
        if (value.id == this.p.id) count++;
      }
    if (count != 0) this.isLiked = 1; else this.isLiked = 0;

  }
  pDiscount() {
    var rtn = "";
    var p1 = parseInt(this.p.regular_price);
    var p2 = parseInt(this.p.sale_price);
    if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) { rtn = ""; }
    var result = Math.abs((p1 - p2) / p1 * 100);
    result = parseInt(result.toString());
    if (result == 0) { rtn = "" }
    rtn = result + '%';
    return rtn;
  }

  showProductDetail() {
    //if (this.type == 'recent' || this.type == 'wishList') {
    // this.loading.show();
    // this.config.Woocommerce.getAsync("products/" + this.p.id).then((data) => {
    //   //this.alert.show("loaded");
    //   this.loading.hide();
    //   this.navCtrl.push(ProductDetailPage, { data: JSON.parse(data.body) });
    // }, err => {
    //   this.loading.hide();
    //   this.translate.get("Item not Available!").subscribe((res) => {
    //     this.alert.show(res);
    //   });
    //   console.log(err);
    // });
    // }
    // else
    this.navCtrl.push(ProductDetailPage, { data: this.p });
    if (this.type != 'recent') {
      this.shared.addToRecent(this.p);
    }
  }

  checkProductNew() {
    var pDate = new Date(this.p.date_created);
    var date = pDate.getTime() + this.config.newProductDuration * 86400000;
    var todayDate = new Date().getTime();
    if (date > todayDate)
      return true;
    else
      return false
  }

  addToCart() { this.shared.addToCart(this.p, null, null, null); this.navCtrl.push(CartPage); }

  isInCart() {
    var found = false;

    for (let value of this.shared.cartProducts) {
      if (value.product_id == this.p.id) { found = true; }
    }

    if (found == true) return true;
    else return false;
  }
  removeRecent() {
    this.shared.removeRecent(this.p);
  }

  clickWishList() {
    // this.loading.autoHide(500);
    if (this.isLiked == 0) { this.addWishList(); }
    else { this.removeWishList(); }


  }
  addWishList() {
    this.shared.addWishList(this.p);
  }
  removeWishList() {
    this.shared.removeWishList(this.p);
  }


  ngOnChanges() {

  }

  ngOnInit() {
    this.translate.get("shipping").subscribe((res) => { this.price_html = this.p.price_html + "&nbsp;+&nbsp;" + res; });

  }

  share() {
    let images = [];
    images.push(this.p.images[0].src);
    if (this.p.type == "grouped") {
      this.loading.show();
      this.config.Woocommerce.getAsync("products/?include=" + this.p.grouped_products).then(data => {
        let groupProducts = JSON.parse(data.body);
        for (let val of groupProducts) { images.push(val.images[0].src); }
        this.applicationRef.tick();
        console.log(images);
        this.socialSharing.share("", "", images, "").then(() => { this.loading.hide(); }).catch(() => { this.loading.hide(); });
      });
    }
    else {
      this.loading.show();
      this.socialSharing.share("", "", images, "").then(() => { this.loading.hide(); }).catch(() => { this.loading.hide(); });
    }

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.present();
  }

  download(images) {
    console.log(images);
      
    this.getStoragePath().then(url => {
      var strUrl = url;
      if (this.platform.is('android')) {
        this.presentToast('Downloaded Started');

        const fileTransfer: FileTransferObject = this.transfer.create();
        const url = images[i].src//'http://www.example.com/file.pdf';

        for (var i = 0; i<= images.length; i++){
          var image = images[i].src;//images[i].toString();
          fileTransfer.download(image, strUrl + 'Image'+i+'.png').then((entry) => {
          
          }, (error) => {
            alert("Error:"+error)
          });
          if(i == images.length - 1){
            this.presentToast('Succesfully downloaded all images at Localstorage/Fashaish');
          }
        }

     
  }});
 

  }

  getStoragePath() {
    let file = this.file;
    return this.file.resolveDirectoryUrl(this.file.externalRootDirectory).then(function (directoryEntry) {
      return file.getDirectory(directoryEntry, "Fashaish", {
        create: true,
        exclusive: false
      }).then(function () {
        return directoryEntry.nativeURL + "Fashaish/";
      });
    });
  }

}
