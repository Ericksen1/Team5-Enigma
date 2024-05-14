import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel,IonThumbnail
  , IonList, IonItem, IonBackButton, IonIcon, } from '@ionic/angular/standalone';
import { DataServiceService } from './data-service.service'; // Importa servicio de datos
import { IonicModule } from '@ionic/angular';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonList, IonLabel, IonButton, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonThumbnail,IonList, IonItem, RouterLink, IonIcon, RouterLink,
  ],
})
export class PruebaPage implements OnInit {

  
  items: Item[] = [];
constructor(/*private dataService: DataServiceService*/) { }

  ngOnInit(): void {
     /*this.loadData();*/ 
     //Datos de ejemplo, lo comentado /**/ es del sevicio de la base de datos 
     this.items = [
      { id: 1, name: 'Producto 1', price: 10, quantity: 5, total: 50, image: '#' },
      { id: 2, name: 'Producto 2', price: 15, quantity: 5, total: 75, image: '#' },
      { id: 3, name: 'Producto 3', price: 15, quantity: 5, total: 75, image: '#' },
      { id: 3, name: 'Producto 4', price: 15, quantity: 5, total: 75, image: '#' },
    ];
  }

  /*loadData() {
    this.dataService.getData().subscribe((data: any[]) => {
      this.items = data; 
    });
  }*/

  increaseQuantity(item: Item) {
    item.quantity++;
    item.total = item.quantity * item.price;
  }

  decreaseQuantity(item: Item) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.quantity * item.price;
    }
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotal(): number {
    //Aqui se puede usar una de las dos 
    return this.items.reduce((total, item) => total + item.total, 0);
    /* let total = 0;
  for (let item of this.items) {
    total += item.price;
  }
  return total;*/ 
  }
  
}
