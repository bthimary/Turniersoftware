import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricComponent } from './historic.component';

describe('YourprocessComponent', () => {
  let component: HistoricComponent;
  let fixture: ComponentFixture<HistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
