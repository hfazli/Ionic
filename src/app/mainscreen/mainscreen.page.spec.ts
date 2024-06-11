import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainscreenPage } from './mainscreen.page';

describe('MainscreenPage', () => {
  let component: MainscreenPage;
  let fixture: ComponentFixture<MainscreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
