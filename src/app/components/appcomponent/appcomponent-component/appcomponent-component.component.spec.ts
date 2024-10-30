import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcomponentComponentComponent } from './appcomponent-component.component';

describe('AppcomponentComponentComponent', () => {
  let component: AppcomponentComponentComponent;
  let fixture: ComponentFixture<AppcomponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppcomponentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcomponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
