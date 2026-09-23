import { Component, Input } from '@angular/core';
import { Vaga } from '../../models/vaga';

@Component({
  imports: [],
  selector: 'app-card-vaga',
  styleUrl: './card-vaga.css',
  templateUrl: './card-vaga.html',
})
export class CardVaga {
  // O componente pai fornece os dados da vaga e o estado do login.
  @Input({ required: true }) vaga!: Vaga;
  @Input() usuarioLogado: boolean = false;
  detalhesVisiveis: boolean = false;
  candidaturaEnviada: boolean = false;

  alterarDetalhes(): void {
    this.detalhesVisiveis = !this.detalhesVisiveis;
  }

  alterarFavorita(): void {
    if (!this.usuarioLogado) return;
    this.vaga.favorita = !this.vaga.favorita;
  }

  candidatar(): void {
    // Simulação local: nenhuma candidatura é enviada para um servidor.
    if (this.usuarioLogado && this.vaga.aberta && !this.candidaturaEnviada) {
      this.candidaturaEnviada = true;
    }
  }
}
