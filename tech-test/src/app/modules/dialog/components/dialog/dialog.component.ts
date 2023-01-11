import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @ViewChild('dialog', { static: false }) dialog!: ElementRef;

  constructor() { }
}
