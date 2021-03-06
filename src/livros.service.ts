import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {    
        livros: Livro[] = 
    [
        new Livro("LIV01", "Livro FrontEnd", 29.90),
        new Livro("LIV02", "Livro BackEnd", 39.90),
        new Livro("LIV03", "InteligĂȘncia artificial", 29.90),
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id: number): Livro {
        return this.livros[0];
    }

    criar(livro: Livro) {
        this.livros.push(livro);
    }

    alterar(livro: Livro): Livro {
        return livro;
    }

    apagar(id: number) {
        this.livros.pop();
    }
}