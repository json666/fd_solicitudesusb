import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaSoliExternaComponent } from './modifica-soli-externa.component';

describe('ModificaSoliExternaComponent', () => {
  let component: ModificaSoliExternaComponent;
  let fixture: ComponentFixture<ModificaSoliExternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaSoliExternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaSoliExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
