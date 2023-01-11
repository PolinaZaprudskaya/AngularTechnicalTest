import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TaskThemeDirective } from './directives/task-theme.directive';
import { InputWrapperComponent } from './components/input-wrapper/input-wrapper.component';
import { FormsModule } from '@angular/forms';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { FailedDialogComponent } from './dialogs/failed-dialog/failed-dialog.component';
import { DialogModule } from '@dialog/dialog.module';
import { TextareaComponent } from './components/textarea/textarea.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    TaskThemeDirective,
    InputWrapperComponent,
    SuccessDialogComponent,
    FailedDialogComponent,
    TextareaComponent,
    RadioButtonComponent
  ],
  exports: [
    CheckboxComponent,
    InputWrapperComponent,
    InputComponent,
    TextareaComponent,
    RadioButtonComponent,
    TaskThemeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule
  ]
})
export class SharedModule { }
