import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelAtendPage } from './cancel-atend.page';

describe('CancelAtendPage', () => {
  let component: CancelAtendPage;
  let fixture: ComponentFixture<CancelAtendPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CancelAtendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
