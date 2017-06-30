import { Component, OnInit } from '@angular/core';
import { PesquisaImagemService } from 'app/pesquisa-imagem.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  constructor(PesquisaImagemService) { }

  ngOnInit() {
  }

  pesquisar() {
    //return PesquisaImagemService.();
  }
}
