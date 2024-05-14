import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-comprafinalizada',
  templateUrl: './comprafinalizada.page.html',
  styleUrls: ['./comprafinalizada.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
    , RouterLink, 
  ]
})
export class ComprafinalizadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log()
  }

  

}
