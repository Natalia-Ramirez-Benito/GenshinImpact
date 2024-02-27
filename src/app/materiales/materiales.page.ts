import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.page.html',
  styleUrls: ['./materiales.page.scss'],
})
export class MaterialesPage implements OnInit {

  nuevoMaterial = { nombre: '', rareza: 1 };
  materiales: any[] = [];

  agregarMaterial() {
    this.materiales.push({ ...this.nuevoMaterial });
    // Limpia el formulario después de agregar el material
    this.nuevoMaterial = { nombre: '', rareza: 1 };
  }

  eliminarMaterial(material: any) {
    const index = this.materiales.indexOf(material);
    if (index !== -1) {
      this.materiales.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
