import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prod } from '../Models/Prod';

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe implements OnInit {

  id: number = 0;
produtoSelecionado : Prod | undefined = undefined;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? 0;

    this.produtoSelecionado = this.Produto?.find(x => x.id == this.id);
    console.log(this.produtoSelecionado);
  }

  Produto: Prod[] | null = [
    { id: 1, nome: 'bombom', preco: 2.50, descricao: "marquito", emEstoque: 32 },
    { id: 2, nome: 'chacolate', preco: 5, descricao: "cacao", emEstoque: 13 },
    { id: 3, nome: 'xbox', preco: 3.800, descricao: "gamepasse", emEstoque: 0 },
    { id: 4, nome: 'hamborga', preco: 17, descricao: "burguuir", emEstoque: 12 },
  ];




}
