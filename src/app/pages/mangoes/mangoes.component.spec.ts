import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangoesComponent } from './mangoes.component';

describe('MangoesComponent', () => {
  let component: MangoesComponent;
  let fixture: ComponentFixture<MangoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
