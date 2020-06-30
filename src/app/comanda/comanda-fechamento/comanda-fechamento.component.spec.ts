import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaFechamentoComponent } from './comanda-fechamento.component';

describe('ComandaFechamentoComponent', () => {
  let component: ComandaFechamentoComponent;
  let fixture: ComponentFixture<ComandaFechamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandaFechamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaFechamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
