import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosFinazalizadosComponent } from './pedidos-finazalizados.component';

describe('PedidosFinazalizadosComponent', () => {
  let component: PedidosFinazalizadosComponent;
  let fixture: ComponentFixture<PedidosFinazalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosFinazalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosFinazalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
