import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasCorrespondenciaComponent } from './consultas-correspondencia.component';

describe('ConsultasCorrespondenciaComponent', () => {
  let component: ConsultasCorrespondenciaComponent;
  let fixture: ComponentFixture<ConsultasCorrespondenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasCorrespondenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
