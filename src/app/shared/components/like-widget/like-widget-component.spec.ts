import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {

  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;
    fixture.detectChanges();
    expect(instance).toBeTruthy();
  });

})
