import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mensagem-validacao',
  templateUrl: './mensagem-validacao.component.html'
})
export class MensagemValidacaoComponent {

  @Input('error') error: any;
  @Input() isUntouched: boolean;

}
