import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAppComponent } from './body-app.component';

describe('BodyAppComponent', () => {
  let component: BodyAppComponent;
  let fixture: ComponentFixture<BodyAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyAppComponent]
    });
    fixture = TestBed.createComponent(BodyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
