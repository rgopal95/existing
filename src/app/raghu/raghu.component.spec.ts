import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaghuComponent } from './raghu.component';

describe('RaghuComponent', () => {
  let component: RaghuComponent;
  let fixture: ComponentFixture<RaghuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaghuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaghuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
