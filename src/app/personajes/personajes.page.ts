import { Component, OnInit } from '@angular/core';
import {GenshinImpactService} from "../services/genshin-impact.service";
import { HttpClient } from '@angular/common/http';

import {SharedModule} from "../shared/shared.module";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  personajes: any[] = [];
  filteredPersonajes: any[] = [];
  searchTerm: string = '';
  constructor(
    private GenshinImpactService: GenshinImpactService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchCharacters(); // Obtener personajes de la API
  }

  fetchCharacters() {
    this.http.get<any>('https://genshin.jmp.blue/characters/all')
      .subscribe(res => {
        this.personajes = res;
        this.filteredPersonajes = res; // Al inicio, mostrar todos los personajes
      });
  }

  getCharacterImageURL(characterName: string): string {
    const formattedName = characterName.toLowerCase().replace(/ /g, '-');
    return `https://genshin.jmp.blue/characters/${formattedName.toLowerCase()}/card`;
  }

  filterCharacters() {
    this.filteredPersonajes = this.personajes.filter(character =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
