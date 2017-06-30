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

}
