import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /*aluno : string = "Luiz"; //variável tipo string
  obs : string = ` O ${this.aluno} é inteligente ` // uso dass crases ``

  constructor() {
    console.log("aluno " + this.aluno + " do curso de DS ");
    console.log("OBS: " + this.obs);
   }*/

   /*opcao: string="Viagens";
   op: string = "Viagens"

   constructor() {
    console.log(" Ver " + this.opcao + " Intenacionais ");
    console.log(" Ver " + this.op + " Nacionais ");
   } */

    nomeProduto: string = "Curso de Angular";
    anuncio: string = `O ${this.nomeProduto} está em promoção`;
    idProduto: number = 123;
    precoProduto: number = 2.59;
    promocao: boolean = true;

    constructor()
    {
      //Variaveis de string com concatenação
      //this.anuncio = `O` + this.nomeProduto + `está em promoção`;

      console.log(`Nome do Produto: `, this.nomeProduto);
      console.log(`Anuncio `, this.anuncio);
      console.log(`ID `, this.idProduto);
      console.log(`Preço: `, this.precoProduto);
      console.log(`Promoção `, this.promocao);

      // Escopo das varíaveis dentro do código
      var variavel1;
      let variavel2;
      const variavel3 = 1;

      var idade = 10
      console.log(`Minha idade é: `, idade);
      /* function  imprimeIdade() {
          var idade = 50
          console.log(`Minha idade é: `, idade);
    }
      imprimeIdade() */
      function imprimeIdade()
      {
        for (let idade = 30; idade <= 40; idade++)
        {
          console.log(`Idade dentro do for: `, idade);
        }
        console.log(`Idade fora do for: `, idade);
      }
      imprimeIdade();






     }

}
