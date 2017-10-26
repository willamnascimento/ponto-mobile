import { Dados } from '../../providers/dados/dados';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-create-account',
    templateUrl: 'create-account.html',
})
export class CreateAccountPage implements OnInit {
    account: any = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private dados: Dados, public formBuilder: FormBuilder) {
        this.account = this.formBuilder.group({
            email: ['', Validators.required],
            nome: ['', Validators.required],
            senha: ['', Validators.required],
            apelido: ['', Validators.required],
            carga_horaria: ['', Validators.required]
        });
    }

    ngOnInit() {
        // ...
    }

    createAccount() {
        console.log(this.account.value);
        
        this.dados.createAccount(this.account.value)
            .subscribe(
            data => {
                if (data.message.match("sucesso"))
                    this.toast.create({ message: 'Conta criada com sucesso.', position: 'botton', duration: 3000,  }).present();
                
            },

            err => {
                this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + err, position: 'botton', duration: 3000 }).present();
                console.log(err);
            }
            );
    }

    //createAccount() {
    //    var is_not_valid = false
    //    if (this.model.email == undefined) {
    //        this.toast.create({ message: 'Informe o email. ', position: 'botton', duration: 3000, }).present();
    //        is_not_valid = true;
    //    }

    //    if (!is_not_valid) {
    //        this.dados.createAccount(this.model.email, this.model.password, this.model.apelido, this.model.carga_horaria)
    //            .then((result: any) => {
    //                this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

    //                //Salvar o token no Ionic Storage para usar em futuras requisições.
    //                //Redirecionar o usuario para outra tela usando o navCtrl
    //                //this.navCtrl.pop();
    //                //this.navCtrl.setRoot()
    //            })
    //            .catch((error: any) => {
    //                this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
    //            });
    //    }
    //}
}
