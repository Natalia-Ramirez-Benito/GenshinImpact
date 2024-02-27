import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtefactosPage } from './artefactos.page';

describe('ArtefactosPage', () => {
  let component: ArtefactosPage;
  let fixture: ComponentFixture<ArtefactosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtefactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
