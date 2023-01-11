import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedDialogComponent } from './failed-dialog.component';
import { DialogModule } from '@dialog/dialog.module';

describe('FailedDialogComponent', () => {
  let component: FailedDialogComponent;
  let fixture: ComponentFixture<FailedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DialogModule ],
      declarations: [ FailedDialogComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
