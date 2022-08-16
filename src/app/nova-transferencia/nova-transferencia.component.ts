import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: Number;
  destino: Number;
  data: Date;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitado Nova Transferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      data: this.data,
    };

    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    }),
      (error) => console.error(error);
  }

  limparCampos() {
    this.valor = undefined;
    this.destino = undefined;
  }
}
