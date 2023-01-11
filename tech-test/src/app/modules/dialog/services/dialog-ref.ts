import { OverlayRef } from '@angular/cdk/overlay';
import { Inject } from '@angular/core';

import { DIALOG_DATA } from '@dialog/services/dialog-tokens.injector';
import { DialogConfig } from '@dialog/services/dialog.service';

export class DialogRef {

  constructor(
    private overlayRef: OverlayRef,
    @Inject(DIALOG_DATA) dialogConfig?: DialogConfig
  ) {
    if (dialogConfig?.backdropClick) {
      this.overlayRef.backdropClick().subscribe(() => this.overlayRef.dispose());
    }
  }
}
