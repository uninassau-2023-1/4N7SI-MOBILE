import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuportePage } from './suporte.page';

describe('SuportePage', () => {
  let component: SuportePage;
  let fixture: ComponentFixture<SuportePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
