import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta: string;

  public rodada = 0;
  public rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      // troca pergunta da rodada
      this.rodada++;

      // atualiza frase da rodada
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      console.log('Está errada!');
    }
  }
}
