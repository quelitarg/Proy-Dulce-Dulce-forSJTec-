import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDulceComponent } from './header-dulce.component';

describe('HeaderDulceComponent', () => {
  let component: HeaderDulceComponent;
  let fixture: ComponentFixture<HeaderDulceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDulceComponent]
    });
    fixture = TestBed.createComponent(HeaderDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
