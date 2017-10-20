import { Dados } from '../../providers/dados/dados';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private dados: Dados) {
    this.model = new User();
  }

  login() {
    this.dados.login(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. ', position: 'botton', duration: 3000         
        }).present();
        
        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        this.navCtrl.push('CreateAccountPage');
        
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        this.navCtrl.push('CreateAccountPage');
      });
  }
}

export class User {
  email: string;
  password: string;
  carga_horaria: string;
}
