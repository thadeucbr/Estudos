import { Negociacao } from '../models/negociacao.js';

export class NegociacaoController {
  private inputData;
  private inputValor;
  private inputQuantidade;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputValor = document.querySelector('#valor');
    this.inputQuantidade = document.querySelector('#quantidade');
  }

  adiciona() {
    const negocicao = new Negociacao(
      this.inputData.value,
      this.inputValor.value,
      this.inputQuantidade.value
    );

    console.log(negocicao);
  }
}