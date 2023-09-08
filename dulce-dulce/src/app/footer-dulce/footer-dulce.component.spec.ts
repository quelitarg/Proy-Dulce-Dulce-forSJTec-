import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDulceComponent } from './footer-dulce.component';

describe('FooterDulceComponent', () => {
  let component: FooterDulceComponent;
  let fixture: ComponentFixture<FooterDulceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterDulceComponent]
    });
    fixture = TestBed.createComponent(FooterDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
