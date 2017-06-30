import { Injectable } from '@angular/core';

@Injectable()
export class PesquisaImagemService {

  constructor() { }

  buscarImagens() {
    var imagens = new String[10];
    for (var index = 0; index < 5; index++) {
      imagens[index] = "http://lorempixel.com/600/400/people/" + Math.floor(Math.random() * 10).toString();
    }
    return imagens;
  }
}
