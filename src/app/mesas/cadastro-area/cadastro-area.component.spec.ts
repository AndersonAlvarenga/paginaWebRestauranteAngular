import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAreaComponent } from './cadastro-area.component';

describe('CadastroAreaComponent', () => {
  let component: CadastroAreaComponent;
  let fixture: ComponentFixture<CadastroAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
