import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreLateraleComponent } from './barre-laterale.component';

describe('BarreLateraleComponent', () => {
  let component: BarreLateraleComponent;
  let fixture: ComponentFixture<BarreLateraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarreLateraleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreLateraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
