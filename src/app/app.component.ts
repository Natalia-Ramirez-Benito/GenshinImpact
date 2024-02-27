import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home', useIonicIcon: true },
    { title: 'Personajes', url: '/personajes', icon: 'personajes', useIonicIcon: false },
    { title: 'Artefactos', url: '/artefactos', icon: 'artefactos', useIonicIcon: false },
    { title: 'Añadir personajes', url: '/materiales', icon: 'materiales', useIonicIcon: false }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
