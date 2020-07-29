import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  loginForm: FormGroup;

  submitForm(form){
    console.log(form);
    console.log("Logado com sucesso!!!");
  }

  constructor(public formbuilder: FormBuilder) { 
    this.loginForm = this.formbuilder.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required]],
    check:[null,[Validators.required]],
    });
  }

  ngOnInit() {
  }

}
