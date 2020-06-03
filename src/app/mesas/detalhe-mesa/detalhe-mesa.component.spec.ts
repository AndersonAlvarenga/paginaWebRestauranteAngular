import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheMesaComponent } from './detalhe-mesa.component';

describe('DetalheMesaComponent', () => {
  let component: DetalheMesaComponent;
  let fixture: ComponentFixture<DetalheMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
