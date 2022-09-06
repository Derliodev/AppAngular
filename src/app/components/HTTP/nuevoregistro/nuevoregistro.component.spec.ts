import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoregistroComponent } from './nuevoregistro.component';

describe('NuevoregistroComponent', () => {
  let component: NuevoregistroComponent;
  let fixture: ComponentFixture<NuevoregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
