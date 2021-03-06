import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  
  livro: any = {
    "titulo": 'Learning Javascript Data Structures and Algorithms 2nd ed',
    "rating": 4.54321,
    "paginas": 314,
    "preco": 44.99,
    "dataLancamento": new Date(2016, 5, 23),
    "url": 'http://a.co/glqjpRP',
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string = '';

  valorAsync = new Promise(( resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  }); 


  //Código obsoleto
  // valorAsync2 = Observable.interval(2000)
  //   .map(valor => 'Valor Assíncrono 2');

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  //Forma correta e mais recomendada
  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
   
    return this.livros.filter( (v: string) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) > 0) {
        return true;
      } else {
        return false;
      }
    });
  }
}
