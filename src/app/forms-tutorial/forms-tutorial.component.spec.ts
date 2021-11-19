import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTutorialComponent } from './forms-tutorial.component';

describe('FormsTutorialComponent', () => {
  let component: FormsTutorialComponent;
  let fixture: ComponentFixture<FormsTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
