import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SenhaAtendPage } from './senha-atend.page';

describe('SenhaAtendPage', () => {
  let component: SenhaAtendPage;
  let fixture: ComponentFixture<SenhaAtendPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SenhaAtendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
