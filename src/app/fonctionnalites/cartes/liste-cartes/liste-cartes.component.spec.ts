import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCartesComponent } from './liste-cartes.component';

describe('ListeCartesComponent', () => {
  let component: ListeCartesComponent;
  let fixture: ComponentFixture<ListeCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCartesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
