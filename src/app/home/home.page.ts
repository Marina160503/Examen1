import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  edad: number | null = null;
  resultado: string = '';

  verificarEdad() {
    if (this.edad !== null) {
      this.resultado = this.edad >= 18
        ? `${this.nombre} si es mayor de edad.`
        : `${this.nombre} no es menor de edad.`;
    }
  }
}

