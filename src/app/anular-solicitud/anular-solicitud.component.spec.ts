import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnularSolicitudComponent } from './anular-solicitud.component';

describe('AnularSolicitudComponent', () => {
  let component: AnularSolicitudComponent;
  let fixture: ComponentFixture<AnularSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnularSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnularSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
