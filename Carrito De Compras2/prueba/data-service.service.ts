import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


  getData(): Observable<any[]> {
    
    return of([
      { id: 1, name: 'Producto 1', price: 10, quantity: 2, total: 20, image: 'url_producto_1' },
      { id: 2, name: 'Producto 2', price: 15, quantity: 1, total: 15, image: 'url_producto_2' },
      
    ]);
  }
}
