import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SQLite  , SQLiteDatabaseConfig , SQLiteObject } from '@ionic-native/sqlite';
import { SqlStorage } from '../providers/sql-storage/sql-storage';
import { SplashScreen } from '@ionic-native/splash-screen';

class SQLiteMock {
  public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {

      return new Promise((resolve,reject)=>{
      resolve(new SQLiteObject(new Object()));
      });
  }
} 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: SQLite, useClass: SQLiteMock},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqlStorage,

  ]
})
export class AppModule {}
