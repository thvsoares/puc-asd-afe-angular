import { TestBed, inject } from '@angular/core/testing';

import { PesquisaImagemService } from './pesquisa-imagem.service';

describe('PesquisaImagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaImagemService]
    });
  });

  it('should be created', inject([PesquisaImagemService], (service: PesquisaImagemService) => {
    expect(service).toBeTruthy();
  }));
});
