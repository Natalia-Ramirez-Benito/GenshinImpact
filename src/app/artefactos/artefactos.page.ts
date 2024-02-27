import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-artefactos',
  templateUrl: './artefactos.page.html',
  styleUrls: ['./artefactos.page.scss'],
})
export class ArtefactosPage implements OnInit {

  artefactos: any[] = [];
  filteredArtifacts: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchArtifacts(); // Obtener artefactos de la API
  }

  fetchArtifacts() {
    this.http.get<any>('https://genshin.jmp.blue/artifacts/all')
      .subscribe(res => {
        this.artefactos = res;
        this.filteredArtifacts = [...this.artefactos];
      });
  }

  getArtifactImageURL(name: string): string {
    // Convertir el nombre a minúsculas y reemplazar espacios con guiones
    const formattedName = name.toLowerCase().replace(/ /g, '-');
    return `https://genshin.jmp.blue/artifacts/${formattedName}/flower-of-life`;
  }

  filterArtifacts() {
    if (this.searchTerm.trim() === '') {
      this.filteredArtifacts = [...this.artefactos];
    } else {
      this.filteredArtifacts = this.artefactos.filter(a =>
        a.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

}
