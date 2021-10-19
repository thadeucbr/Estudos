import { Negociacao } from '../models/negociacao.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputValor = document.querySelector('#valor');
    this.inputQuantidade = document.querySelector('#quantidade');
  }

  adiciona(): void {
    const negocicao = this.criaNegociacao()
    
    console.log(negocicao);
    this.limparFormulario
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;
    const data = new Date(this.inputData.value.replace(exp,','));
    const valor = parseFloat(this.inputValor.value);
    const quantidade = parseInt(this.inputQuantidade.value);

    return new Negociacao(data, quantidade, valor);
  }

  limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}