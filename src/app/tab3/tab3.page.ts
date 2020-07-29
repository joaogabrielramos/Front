import { Component } from '@angular/core';
import{ FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    republicForm:FormGroup;
  toastController: any;
  submitForm(form){
    console.log(form);
    console.log(form.value);
  }
  
  
  constructor(public formbuilder: FormBuilder) {
    this.republicForm = this.formbuilder.group({
      owner:[null, [Validators.required]],
      image:[null,[Validators.required]],
      republicName:[null,[Validators.required,Validators.maxLength(20)]],
      republicAddress:[null,[Validators.required]], 
      republicState:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
  }

}
