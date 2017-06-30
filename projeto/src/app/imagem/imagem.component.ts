import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {
  imageUrl = "http://lorempixel.com/600/400/";
  constructor() { }

  ngOnInit() {
  }

  trocaImagem() {
    this.imageUrl = "http://lorempixel.com/600/400/people/" + Math.floor(Math.random() * 10).toString();
  }

}
