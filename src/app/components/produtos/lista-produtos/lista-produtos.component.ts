import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  listaString: string[] = ['Primeiro', 'segundo','Terceiro'];
  listaNumeros: number[] = [15,15.18,100];

  objetoModelo = {
    nome: 'Messi',
    idade:36,
    altura: 1.70,
    atleta:true
  };
  listaProdutos: any[] = [
    { nome: 'Curso Angular', precoProduto: 35.56, validade: '2024-04-25', id:1},
    {nome: 'Curso de Ionic', precoProduto:50, validade:'2024-04-25', id:2, promocao: true},
    {id:3, nome:'Curso de Ionic Avançado', precoProduto: 50, validade: '2024-04-25'},

  ];

  constructor() {
    for (let item of this.listaString)
    {
      console.log(item);
    }

    for(const item of this.listaNumeros)
    {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
  }

  ngOnInit(): void {

  }

}
 