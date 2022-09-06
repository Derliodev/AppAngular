import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRegistroComponent } from './detalle-registro.component';

describe('DetalleRegistroComponent', () => {
  let component: DetalleRegistroComponent;
  let fixture: ComponentFixture<DetalleRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
