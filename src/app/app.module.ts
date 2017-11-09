import { AuthService } from './../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CacheModule } from "ionic-cache";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite  , SQLiteDatabaseConfig , SQLiteObject } from '@ionic-native/sqlite';
import { SqlStorage } from '../providers/sql-storage/sql-storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dados } from '../providers/dados/dados';
import { HttpModule } from '@angular/http';
import { CacheProvider } from '../providers/cache/cache';
import { Global } from '../providers/global/global';


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
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CacheModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: SQLite, useClass: SQLiteMock},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqlStorage,
    Dados,
    CacheProvider,
    AuthService,
    Global,
  ],
})
export class AppModule {}
