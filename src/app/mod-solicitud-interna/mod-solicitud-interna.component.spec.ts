import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSolicitudInternaComponent } from './mod-solicitud-interna.component';

describe('ModSolicitudInternaComponent', () => {
  let component: ModSolicitudInternaComponent;
  let fixture: ComponentFixture<ModSolicitudInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModSolicitudInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSolicitudInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
