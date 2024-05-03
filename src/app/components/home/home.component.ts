import { Component } from '@angular/core';

@Component({
  selector: 'app- card-home',
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

    nomeProduto: string = "Casa de verão";
    anuncio: string = `O ${this.nomeProduto} está em promoção`;
    idProduto: number = 3.;
    precoProduto: number = 2.59;
    promocao: boolean = true;
    foto:string = 'assets/img/crud.png'
    dataValidade = '2024-04-18'

    nomeProdut: string = "Casa de verão";
    anunci: string = `O ${this.nomeProdut} está em promoção`;
    idProdut: number = 1.;
    precoProdut: number = 2;
    promoca: boolean = true;
    fot:string = 'assets/img/crud.png'
    dataValidad = '2024-04-18'

    constructor()
    {
      //Variaveis de string com concatenação
      //this.anuncio = `O` + this.nomeProduto + `está em promoção`;

      /*console.log(`Nome do Produto: `, this.nomeProduto);
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
      /*function imprimeIdade()
      {
        for (let idade = 30; idade <= 40; idade++)
        {
          console.log(`Idade dentro do for: `, idade);
        }
        console.log(`Idade fora do for: `, idade);
      }
      imprimeIdade(); */

      /*let variavel = 0;
      let variavel = 10;
      console.log('variavel', variavel);
      function funcao()
      {
        let outra_variavel = 20;
        let outra_variavel = 30;
        console.log('outra variavel:',outra_variavel); // variavel apresenta erro porque: let pode ser atualizado, mas não declarado novamente.
      }
      funcao();

      /*var a = 10;
      let b = 20;
      function bar()
      {
        var a = 30;
        let b = 40;
        if(true)
        {
          var a = 50;
          let b = 60;
          console.log('Variável a dentro do if', a);
          console.log('Variável b dentro do if', b);
        }
        console.log('Variável a dentro da função', a);
        console.log('Variável b dentro da função', b);
      }
      bar();
      console.log('Variável a fora da função', a);
      console.log('Variável b fora da função', b); */

      /*let a = 1;
      function bar()
      {
        console.log('variável a dentro do if: ', a);
        let b = 2;
        if(true)
        {
          let c = 3;
          let a = 4;
          console.log('variável a dentro do if: ', a);
          console.log('variável b dentro do if: ', b);
          console.log('variável c dentro do if: ', c);
        }
        console.log('variável a dentro do if: ', a);
        console.log('variável b dentro do if: ', b);
        //console.log(c);
      }
      bar(); */

      /*var a = 5;
      var b = 10;
      if(a = 5)
      {
        let a = 4;
        var b = 1;
        console.log('Variável a dentro do if: ', a);
        console.log('Variável b dentro do if: ', b);
      }
      console.log('Variável a fora do if: ', a);
      console.log('Variável b fora do if: ', b); */

     }

}
