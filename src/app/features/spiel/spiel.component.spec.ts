import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielComponent } from './spiel.component';

describe('SpielComponent', () => {
  let component: SpielComponent;
  let fixture: ComponentFixture<SpielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpielComponent]
    });
    fixture = TestBed.createComponent(SpielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
