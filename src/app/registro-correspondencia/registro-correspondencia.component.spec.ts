import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCorrespondenciaComponent } from './registro-correspondencia.component';

describe('RegistroCorrespondenciaComponent', () => {
  let component: RegistroCorrespondenciaComponent;
  let fixture: ComponentFixture<RegistroCorrespondenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCorrespondenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
