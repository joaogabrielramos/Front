import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

class republic{
  title:string;
  subtitle:string;
  content:string;
  imagem:string;
  price:string;
  street:string;
  number:string;
  bedrooms_number:number;
  rate:string;
  
  
}
import { from } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  republics:republic[];
  

  constructor(public toastController: ToastController) {}

  async presentToast(){
    const toast = await this.toastController.create({
      message:'Comentário enviado com sucesso.',
      duration:2000

    });
    toast.present()
  }
  
  ngOnInit(){
    this.republics=[
      {
        title:'Republica dos Gramados',
        subtitle:'Republica quarto individual',
        content:'Republica com 25 quartos e 15 banheiros,contas inclusas e no momento com quartos disponiveis :',
        imagem:'https://images.unsplash.com/photo-1553172366-55b235a466f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price:' ,R$850.00',
        street:'Rua do Cobal',
        number:'250',
        bedrooms_number:5,
        rate:'7.6'
        
      },
      {
        title:'Republica Salão',
        subtitle:'Republica quarto compartilhado',
        content:'Republica com 18 quartos e 9 banheiros, contas inclusas e  no momento com quarto disponiveis :',
        imagem:'https://images.unsplash.com/photo-1578898887155-72e9a7da1fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' ,
        price:' ,R$650.00',
        street:'Rua Maracanã',
        number:'550',
        bedrooms_number:10,
        rate:'8.5'
      }
    ]
    
    
    

     
  }
  
}
