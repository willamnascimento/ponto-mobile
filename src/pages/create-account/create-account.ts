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
