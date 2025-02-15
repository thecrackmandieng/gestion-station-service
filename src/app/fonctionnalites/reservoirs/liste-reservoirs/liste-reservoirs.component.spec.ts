import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReservoirsComponent } from './liste-reservoirs.component';

describe('ListeReservoirsComponent', () => {
  let component: ListeReservoirsComponent;
  let fixture: ComponentFixture<ListeReservoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeReservoirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeReservoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
