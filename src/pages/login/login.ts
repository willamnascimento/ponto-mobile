import { Dados } from '../../providers/dados/dados';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CacheProvider } from '../../providers/cache/cache';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, ToastController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Global } from '../../providers/global/global';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
    loading: Loading;
    registerCredentials = { email: '', senha: '' };

    constructor(private navCtrl: NavController, private toast: ToastController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private dados: Dados, private global: Global) { }

    //constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private dados: Dados, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public cache: CacheProvider) {
    //    this.login = this.formBuilder.group({
    //        email: ['', Validators.required],
    //        senha: ['', Validators.required]
            
    //    });
    //}

  ngOnInit() {
      // ...
  }

  login() {

      this.showLoading();
      if (!this.global.sem_banco) {
          this.dados.login(this.registerCredentials)
              .subscribe(
              data => {
                  this.toast.create({ message: data.message, position: 'botton', duration: 3000, }).present();
                  if (data.message.match("sucesso"))
                      this.navCtrl.push('ApontamentoPage');
                  else
                      this.loading.dismiss();
              },
              err => {
                  this.toast.create({ message: ' Erro: verifique conexão com internet.', position: 'botton', duration: 3000 }).present();
                  this.loading.dismiss();
              }
              );
      } else {
          this.navCtrl.push('ApontamentoPage');
          this.toast.create({ message: 'Usuário logado com sucesso.', position: 'botton', duration: 3000 }).present();
          this.loading.dismiss();
      }
      
      //this.cache.loadList(this.login.value);
  }
  showLoading() {
      this.loading = this.loadingCtrl.create({
          content: 'Por favor aguarde...',
          dismissOnPageChange: true
      });
      this.loading.present();
  }
}
