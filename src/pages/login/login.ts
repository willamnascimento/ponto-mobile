import { Dados } from '../../providers/dados/dados';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
    login: any = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private dados: Dados, public formBuilder: FormBuilder) {
        this.login = this.formBuilder.group({
            email: ['', Validators.required],
            senha: ['', Validators.required]
            
        });
    }

  ngOnInit() {
      // ...
  }

  Login() {
      this.dados.login(this.login.value)
          .subscribe(
          data => {
              this.toast.create({ message: data.message, position: 'botton', duration: 3000, }).present();
              if (data.message.match("sucesso"))
                  this.navCtrl.push('ApontamentoPage');
          },
          err => {
              this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + err, position: 'botton', duration: 3000 }).present();
              console.log(err);
          }
          );
  }
}

export class User {
  email: string;
  password: string;
  carga_horaria: string;
}
