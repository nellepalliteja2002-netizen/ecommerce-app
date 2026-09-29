import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappLoginSuccessComponent } from './whatsapp-login-success.component';

describe('WhatsappLoginSuccessComponent', () => {
  let component: WhatsappLoginSuccessComponent;
  let fixture: ComponentFixture<WhatsappLoginSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappLoginSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
