import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDulceComponent } from './body-dulce.component';

describe('BodyDulceComponent', () => {
  let component: BodyDulceComponent;
  let fixture: ComponentFixture<BodyDulceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyDulceComponent]
    });
    fixture = TestBed.createComponent(BodyDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
