import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbytempleComponent } from './nearbytemple.component';

describe('NearbytempleComponent', () => {
  let component: NearbytempleComponent;
  let fixture: ComponentFixture<NearbytempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NearbytempleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NearbytempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
