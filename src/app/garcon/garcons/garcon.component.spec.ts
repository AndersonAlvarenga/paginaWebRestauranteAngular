import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarconComponent } from './garcon.component';

describe('GarconComponent', () => {
  let component: GarconComponent;
  let fixture: ComponentFixture<GarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
