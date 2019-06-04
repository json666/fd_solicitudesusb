import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInternoComponent } from './registro-interno.component';

describe('RegistroInternoComponent', () => {
  let component: RegistroInternoComponent;
  let fixture: ComponentFixture<RegistroInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroInternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
