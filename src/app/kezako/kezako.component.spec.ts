import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KezakoComponent } from './kezako.component';

describe('KezakoComponent', () => {
  let component: KezakoComponent;
  let fixture: ComponentFixture<KezakoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KezakoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KezakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
