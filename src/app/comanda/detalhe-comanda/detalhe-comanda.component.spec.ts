import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheComandaComponent } from './detalhe-comanda.component';

describe('DetalheComandaComponent', () => {
  let component: DetalheComandaComponent;
  let fixture: ComponentFixture<DetalheComandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheComandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
