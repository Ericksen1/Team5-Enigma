import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonButton,
  IonRow,
  IonCol,
  IonGrid,
  IonList,
  IonItem,
  IonInput,
  IonIcon,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
  IonCheckbox,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonCheckbox,
    IonText,
    IonLabel,

    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonGrid,

    IonCol,
    IonRow,

    IonButton,

    IonContent,
    IonHeader,
    IonSelect,
    IonSelectOption,
    IonTitle,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  // formLogin = document.getElementById('form_login');
  // formRegister = document.getElementById('form_register');
  // public tabLogin = document.getElementById('labelLogin');
  // public tabRegister = document.getElementById('labelRegister');

  // hideMe = false;
  
  constructor() {}

  ngOnInit() {
    return 0;
  }

  // show_login(){
  //   console.log(this.tabLogin?.classList.contains('selected '))
  //   if(!this.tabLogin?.classList.contains('selected')){
  //     this.tabLogin?.classList.add('selected')
  //     this.tabRegister?.classList.remove('selected');
  //   }
  // }

  // show_register(){
  //       const tabLogin = document.getElementById('labelLogin');
  //   const tabRegister = document.getElementById('labelRegister');
  //   if( !tabRegister?.classList.contains('selected')){
  //     // tabLogin?.classList.add('selected')
  //     // tabRegister?.classList.remove('selected');
  //     console.log(tabLogin?.classList.contains('selected '))
  //     console.log(tabRegister?.classList.contains('selected '))
  //   }
  // }
  show_login() {
    const formLogin = document.getElementById('form_login');
    const formRegister = document.getElementById('form_register');
    const tabLogin = document.getElementById('labelLogin');
    const tabRegister = document.getElementById('labelRegister');

    if (
      formLogin!.style.display == 'none' 
    ) {
      formRegister!.style.display = 'none';
      formLogin!.style.display = 'block';
      tabLogin!.classList.add('selected');
      tabRegister!.classList.remove('selected');
    } 

    // console.log(formRegister!.style.display == 'block' )
    // console.log(formLogin!.style.display == 'block' )

  }

  show_register() {
    const formLogin = document.getElementById('form_login');
    const formRegister = document.getElementById('form_register');
    const tabLogin = document.getElementById('labelLogin');
    const tabRegister = document.getElementById('labelRegister');

    if (
      formRegister !== null 
    ) {
      formLogin!.style.display = 'none';
      formRegister.style.display = 'block';
      tabLogin!.classList.remove('selected');
      tabRegister!.classList.add('selected');
    }
    // console.log(formRegister!.style.display == 'block' )
    // console.log(formLogin!.style.display == 'block' )
  }
}
