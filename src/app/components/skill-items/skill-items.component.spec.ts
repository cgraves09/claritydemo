import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillItemsComponent } from './skill-items.component';

describe('SkillItemsComponent', () => {
  let component: SkillItemsComponent;
  let fixture: ComponentFixture<SkillItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
