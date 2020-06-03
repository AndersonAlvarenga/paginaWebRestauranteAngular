import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaFechadaComponent } from './comanda-fechada.component';

describe('ComandaFechadaComponent', () => {
  let component: ComandaFechadaComponent;
  let fixture: ComponentFixture<ComandaFechadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandaFechadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaFechadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
