
// Contrato dos dados usados pelo componente de card.
export interface Vaga {
  id: number;
  empresa: string;
  cargo: string;
  modalidade: string;
  salario: number;
  localizacao: string;
  descricao: string;
  requisitos: string[];
  aberta: boolean;
  urgente: boolean;
  favorita: boolean;
  imagem: string;
}


