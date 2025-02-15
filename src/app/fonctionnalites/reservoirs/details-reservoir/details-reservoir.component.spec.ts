import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReservoirComponent } from './details-reservoir.component';

describe('DetailsReservoirComponent', () => {
  let component: DetailsReservoirComponent;
  let fixture: ComponentFixture<DetailsReservoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsReservoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReservoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
