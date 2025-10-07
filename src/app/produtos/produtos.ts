import { Component } from '@angular/core';
import { Prod } from '../Models/Prod';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class Produtos {

  temProduto: Produtos | null = null;


   Produto: Prod[] | null = [
         {id:1, nome:'bombom', preco: 2.50, descricao: "marquito", emEstoque: 32 },
         {id:2, nome:'chacolate', preco: 5, descricao: "cacao", emEstoque: 13 },
         {id:3, nome:'xbox', preco: 3.800, descricao: "gamepasse", emEstoque: 0 },
         {id:4, nome:'hamborga', preco: 17, descricao: "burguuir", emEstoque: 12 },
 ];
 }
