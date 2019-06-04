import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudExternaComponent } from './solicitud-externa.component';

describe('SolicitudExternaComponent', () => {
  let component: SolicitudExternaComponent;
  let fixture: ComponentFixture<SolicitudExternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudExternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
