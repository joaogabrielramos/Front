import { Component } from '@angular/core';
import{ FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  registerForm:FormGroup;
  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name:[null,[Validators.required,Validators.maxLength(20)]],
      password:[null, [Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
      status:[null,[Validators.required]],
      email:[null, [Validators.required,Validators.email]],
      phone:[null,[Validators.required]]
    });
  }
  ngOnInit(){
  
  }
}
