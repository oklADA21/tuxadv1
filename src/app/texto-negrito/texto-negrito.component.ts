import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-em-negrito',
  template: '<p [style.font-weight]="bold ? \'bold\' : \'normal\'">{{ texto }}</p>',
})
export class TextoEmNegritoComponent {
  @Input() texto: string = '';
  @Input() bold: boolean = true;
}