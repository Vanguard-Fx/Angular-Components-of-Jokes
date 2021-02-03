import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarzellettaComponent } from './barzelletta.component';

describe('BarzellettaComponent', () => {
  let component: BarzellettaComponent;
  let fixture: ComponentFixture<BarzellettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarzellettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarzellettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
