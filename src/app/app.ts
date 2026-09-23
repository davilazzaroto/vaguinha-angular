import { Component } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { CardVaga } from './components/card-vaga/card-vaga';
import { Sobre } from './components/sobre/sobre';
import { Vaga } from './models/vaga';
@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, CardVaga, Sobre],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo: string = 'Vagas em destaque';
  subtitulo: string = 'Conheça as Vagas';

  usuarioLogado: boolean = false;
  nomeUsuario: string = 'É o Bred';

  // Dados fictícios: cada ID deve identificar uma única vaga.
  vagas: Vaga[] = [
    {
      id: 1,
      empresa: 'Vaguinha Tecnologia',
      cargo: 'Desenvolvedor(a) Angular',
      modalidade: 'Híbrido',
      salario: 8500,
      localizacao: 'São Paulo, SP',
      descricao: 'Crie interfaces modernas e acessíveis para produtos digitais usando Angular.',
      requisitos: ['Angular', 'TypeScript', 'Git e GitHub'],
      aberta: true,
      urgente: true,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 2,
      empresa: 'Nuvem Labs',
      cargo: 'Engenheiro(a) de Software Backend',
      modalidade: 'Remoto',
      salario: 11000,
      localizacao: 'Brasil',
      descricao:
        'Desenvolva APIs escaláveis e serviços distribuídos para nossa plataforma em nuvem.',
      requisitos: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      aberta: true,
      urgente: false,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 3,
      empresa: 'Pixel Digital',
      cargo: 'Mago do Front-end',
      modalidade: 'Remoto',
      salario: 7200,
      localizacao: 'Curitiba, PR',
      descricao:
        'Transforme experiências de usuário em produtos web rápidos, responsivos e intuitivos.',
      requisitos: ['HTML e CSS', 'JavaScript', 'React', 'Figma'],
      aberta: true,
      urgente: false,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 4,
      empresa: 'Dados Inteligentes',
      cargo: 'Analista de Dados',
      modalidade: 'Presencial',
      salario: 6800,
      localizacao: 'Belo Horizonte, MG',
      descricao:
        'Encontre insights em grandes volumes de dados e ajude o negócio a tomar decisões melhores.',
      requisitos: ['Python', 'SQL', 'Power BI', 'Estatística'],
      aberta: true,
      urgente: false,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 5,
      empresa: 'SeguraTech',
      cargo: 'Analista de Segurança da Informação',
      modalidade: 'Híbrido',
      salario: 9500,
      localizacao: 'Campinas, SP',
      descricao:
        'Proteja aplicações e infraestrutura contra ameaças em um ambiente de inovação contínua.',
      requisitos: ['Redes', 'Linux', 'LGPD', 'Monitoramento'],
      aberta: true,
      urgente: true,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 6,
      empresa: 'Mobile Solutions',
      cargo: 'Desenvolvedor(a) React Native',
      modalidade: 'Remoto',
      salario: 9200,
      localizacao: 'Brasil',
      descricao:
        'Construa aplicativos móveis de alto desempenho para iOS e Android com React Native.',
      requisitos: ['React Native', 'TypeScript', 'Redux', 'REST API'],
      aberta: true,
      urgente: false,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 7,
      empresa: 'CloudOps Express',
      cargo: 'Engenheiro(a) DevOps',
      modalidade: 'Híbrido',
      salario: 12500,
      localizacao: 'Rio de Janeiro, RJ',
      descricao: 'Automatize pipelines de CI/CD e gerencie infraestrutura como código em nuvem.',
      requisitos: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      aberta: true,
      urgente: true,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 8,
      empresa: 'Design Studio',
      cargo: 'UX/UI Designer',
      modalidade: 'Remoto',
      salario: 7800,
      localizacao: 'Florianópolis, SC',
      descricao:
        'Projete fluxos intuitivos, protótipos interativos e sistemas de design para web e mobile.',
      requisitos: ['Figma', 'Design System', 'Pesquisa com Usuários', 'Wireframing'],
      aberta: true,
      urgente: false,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 9,
      empresa: 'Agiliza Tech',
      cargo: 'Scrum Master',
      modalidade: 'Presencial',
      salario: 8900,
      localizacao: 'Porto Alegre, RS',
      descricao:
        'Facilite rituais ágeis e apoie times multidisciplinares na entrega contínua de valor.',
      requisitos: ['Scrum', 'Kanban', 'Jira', 'Facilitação'],
      aberta: true,
      urgente: false,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 10,
      empresa: 'Brain AI',
      cargo: 'Engenheiro(a) de Machine Learning',
      modalidade: 'Remoto',
      salario: 13500,
      localizacao: 'Brasil',
      descricao:
        'Desenvolva e aplique modelos de inteligência artificial para resolver problemas complexos.',
      requisitos: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn'],
      aberta: true,
      urgente: true,
      favorita: false,
      imagem:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=160&h=160&q=80',
    },
  ];

  // Sessão demonstrativa, sem autenticação real.
  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
