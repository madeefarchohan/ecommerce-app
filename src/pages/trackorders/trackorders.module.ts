import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackordersPage } from './trackorders';

@NgModule({
  declarations: [
    TrackordersPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackordersPage),
  ],
})
export class TrackordersPageModule {}
