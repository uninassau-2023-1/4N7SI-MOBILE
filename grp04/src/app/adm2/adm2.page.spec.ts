import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Adm2Page } from './adm2.page';

describe('Adm2Page', () => {
  let component: Adm2Page;
  let fixture: ComponentFixture<Adm2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Adm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
