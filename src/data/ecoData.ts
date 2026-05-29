import { Indicator, TimelineEvent, ImpactSolutionGroup, OdsGoal, Article, GoodPractice } from '../types';

export const indicators: Indicator[] = [
  {
    id: 'energy',
    label: 'Consumo de Energia',
    value: '220-460',
    unit: 'TWh / ano',
    iconName: 'Zap',
    description: 'Demanda elétrica global projetada para Data Centers até 2026, representando cerca de 1.5% a 2% do consumo de eletricidade de todo o planeta.',
    colorClass: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    neonColor: '#fbbf24',
    impactType: 'impact'
  },
  {
    id: 'water',
    label: 'Pegada Hídrica',
    value: '500',
    unit: 'ml / conversação',
    iconName: 'Droplet',
    description: 'Cada conversa curta (10-50 comandos) com uma IA consome um copo de água potável em infraestrutura evaporativa de resfriamento dos servidores.',
    colorClass: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    neonColor: '#22d3ee',
    impactType: 'impact'
  },
  {
    id: 'emissions',
    label: 'Emissões de Carbono',
    value: '10+',
    unit: 'g CO₂ / geração',
    iconName: 'Gauge',
    description: 'A geração de uma única imagem complexa de IA emite tanto carbono quanto rodar um carro a combustão por centenas de metros.',
    colorClass: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    neonColor: '#f43f5e',
    impactType: 'impact'
  },
  {
    id: 'benefit',
    label: 'Mitigação Climática',
    value: '5-10%',
    unit: 'Redução Global',
    iconName: 'Leaf',
    description: 'Estimativa de redução potencial das emissões globais de gases de efeito estufa se usarmos IA para automatizar e otimizar redes de energia e transporte.',
    colorClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    neonColor: '#10b981',
    impactType: 'benefit'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'mining',
    stageNumber: 1,
    name: 'Extração de Recursos & Chips',
    description: 'O início do ciclo nos polos mineradores. A manufatura de superchips exige altas taxas de minerais críticos como lítio, cobalto e neodímio.',
    iconName: 'Cpu',
    positives: [
      'Criação de semicondutores ultrarrápidos e eficientes.',
      'Sistemas avançados de controle industrial reduzem perdas líquidas.'
    ],
    negatives: [
      'Geração massiva de lixo de mineração tóxico em escala global.',
      'Uso extremo de água pura para fundição de wafers de silício.'
    ],
    details: 'Para construir as GPUs que treinam Inteligências Artificiais modernos, extraem-se terras raras em processos agressivos ao relevo estrutural. A água exigida na fundição necessita de tratamento posterior severo para evitar contaminação do solo local.'
  },
  {
    id: 'training',
    stageNumber: 2,
    name: 'Fase de Treinamento Intensivo',
    description: 'Criação de LLMs (Large Language Models) rodando milhares de placas de vídeo ligadas em paralelo durante semanas ou meses.',
    iconName: 'Activity',
    positives: [
      'Modelos consolidados podem ser replicados sem custos de re-treinamento.',
      'Aplicações úteis criadas para o desenvolvimento sustentável.'
    ],
    negatives: [
      'Emissão de centenas de toneladas de CO₂ antes de o software ser ativado.',
      'Elevada obsolescência de clusters de data centers acelerando ciclos.'
    ],
    details: 'Estudos apontam que o treinamento de um único modelo de linguagem de grande escala (como GPT-3) consumiu cerca de 1.287 megawatt-hora de eletricidade e emitiu mais de 500 toneladas de dióxido de carbono equivalente.'
  },
  {
    id: 'datacenter',
    stageNumber: 3,
    name: 'Operação dos Data Centers',
    description: 'Servidores ativos 24 horas por dia. Manter o "cérebro digital" funcionando requer climatização de precisão e potência constante.',
    iconName: 'Server',
    positives: [
      'Modernização energética com acordos corporativos de energia solar/eólica.',
      'Uso de termofluidos em circuito fechado e reuso térmico em aquecimento local.'
    ],
    negatives: [
      'Grande desperdício térmico se as fontes locais não forem renováveis.',
      'Desvio de recursos hídricos potáveis locais em áreas sob estresse hídrico.'
    ],
    details: 'Os servidores operam em altíssimas temperaturas e utilizam sistemas de resfriamento evaporativo abertos para baratear custos. Isso significa que milhões de litros de água tratada evaporam diariamente, competindo com ecossistemas regionais.'
  },
  {
    id: 'usage',
    stageNumber: 4,
    name: 'Inferência e Uso Diário',
    description: 'Usuários gerando respostas de texto, códigos, imagens e vídeos a todo segundo ao redor do planeta.',
    iconName: 'Smartphone',
    positives: [
      'Respostas de IA substituem buscas dispersas ou deslocamentos físicos.',
      'Ganho drástico em produtividade digital e acessibilidade informacional.'
    ],
    negatives: [
      'Consumo silencioso e cumulativo de energia a nível micro-digital.',
      'Consultas pequenas mas redundantes que sobrecarregam as redes de fibra óptica.'
    ],
    details: 'Embora o consumo de um prompt pareça irrisório (equivalente a carregar o celular por poucas horas), a escala colossal com bilhões de consultas diárias unificadas gera um rastro energético cumulativo equivalente à pegada de nações inteiras.'
  },
  {
    id: 'storage',
    stageNumber: 5,
    name: 'Armazenamento em Nuvem',
    description: 'Gigantescos data-lakes de histórico de dados guardados para fins de personalização e novos treinos.',
    iconName: 'HardDrive',
    positives: [
      'Disponibilização de bases científicas unificadas para pesquisa ambiental.',
      'Algoritmos inteligentes compactam dados evitando servidores ociosos.'
    ],
    negatives: [
      'Armazenamento infinito da chamada "Dark Data" (dados inúteis nunca mais lidos).',
      'Desperdício de eletricidade mantendo discos rodando sem necessidade real.'
    ],
    details: 'Aproximadamente 60% dos dados corporativos na nuvem são dados mortos (vídeos antigos, capturas perdidas, logs redundantes) que demandam consumo contínuo e silencioso de energia 365 dias por ano.'
  },
  {
    id: 'disposal',
    stageNumber: 6,
    name: 'Descarte e Obsolescência Rápida',
    description: 'Com o avanço veloz da Inteligência Artificial, hardwares de apenas 2 ou 3 anos tornam-se obsoletos e dão lugar à novas gerações de chips.',
    iconName: 'Trash2',
    positives: [
      'Iniciativas corporativas de economia circular e reciclagem de metais nobres.',
      'Reaproveitamento de placas antigas para propósitos de baixa complexidade.'
    ],
    negatives: [
      'Acúmulo recorde de lixo eletrônico com componentes químicos perigosos.',
      'Exportação ilegal de eletrônicos para lixões informais em países em desenvolvimento.'
    ],
    details: 'A corrida silenciosa pela soberania tecnológica de IA encurtou o ciclo de vida do silício. Chips que poderiam operar por décadas são aposentados por falta de eficiência micro-algorítmica, sobrecarregando depósitos de lixo técnico.'
  },
  {
    id: 'solutions',
    stageNumber: 7,
    name: 'A Fronteira Sustentável',
    description: 'Adoção estrutural de práticas limpas para compatibilizar o progresso tecnológico com o futuro climático seguro.',
    iconName: 'RefreshCw',
    positives: [
      'Uso de algoritmos compactos e eficientes chamados "Sparsified Models".',
      'Data Centers integrados em fazendas de energia solar dedicada.'
    ],
    negatives: [
      'Necessidade de regulação e auditorias rígidas sobre as empresas big tech.',
      'Custos altos que retardam a adoção igualitária em startups menores.'
    ],
    details: 'O futuro ecológico da IA não é abdicar da ferramenta, mas otimizar o código de software (IA Verde) e criar data centers auto-suficientes que devolvam energia de baixo carbono para a comunidade vizinha.'
  }
];

export const impactsGroup: ImpactSolutionGroup = {
  id: 'impacts',
  title: 'Impactos de Alto Risco',
  iconName: 'ShieldAlert',
  items: [
    {
      id: 'i1',
      title: 'Hiperconsumo Energético',
      text: 'O treinamento de novos modelos consome tanta eletricidade quanto bairros residenciais populosos durante meses, dependendo de matrizes de combustível fóssil nos países servidores.',
      metric: '+40% de demanda elétrica anual de data centers'
    },
    {
      id: 'i2',
      title: 'Estresse Crítico em Recursos Hídricos',
      text: 'A refrigeração de canais de chips requer água doce potável líquida livre de resíduos para o evaporador térmico, limitando a água em comunidades vulneráveis vizinhas.',
      metric: 'Cerca de 500ml de água consumidos a cada poucas interações'
    },
    {
      id: 'i3',
      title: 'Emissão de Gases Estufa (GHG)',
      text: 'Milhares de racks de servidores alimentados por matrizes desatualizadas de carvão ou gás natural geram toneladas de CO₂ não documentados.',
      metric: 'Milhões de toneladas métricas geradas anualmente'
    },
    {
      id: 'i4',
      title: 'Lixo Eletrônico Aceleradíssimo',
      text: 'A demanda por chips cada vez mais rápidos causa a substituição precoce ou descarte incorreto de toneladas de servidores obsoletos por ano.',
      metric: 'Upgrade de frotas de IA em média de 3 em 3 anos'
    }
  ]
};

export const solutionsGroup: ImpactSolutionGroup = {
  id: 'solutions',
  title: 'Caminhos de Transição Ecológica',
  iconName: 'CheckCircle2',
  items: [
    {
      id: 's1',
      title: 'Green AI & Código Otimizado',
      text: 'Focar na arquitetura de software para obter os mesmos resultados cognitivos rodando menos ciclos nas CPUs, priorizando "IA Vermelha de Baixa Pegada".',
      metric: 'Otimização algorítmica reduz emissão em até 70%'
    },
    {
      id: 's2',
      title: 'Energias 100% Renováveis Dedicadas',
      text: 'Data Centers estruturados com contratos diretos de fazendas fotovoltaicas, turbinas eólicas locais ou usinas geotérmicas sem CO₂.',
      metric: 'Acordos PPA limpos cobrindo 100% da operação'
    },
    {
      id: 's3',
      title: 'Resfriamento Avançado "Nenhum Gotejamento"',
      text: 'Substituição das torres de evaporação de água por "Liquid Cooling/Immersion Cooling" (resfriamento por óleo dielétrico ou líquidos em circuito lacrado).',
      metric: 'Redução da pegada hídrica local perto de 0%'
    },
    {
      id: 's4',
      title: 'Economia Circular na Eletro-Infraestrutura',
      text: 'Fidelização de canais de reciclagem de silício e ligas metálicas valiosas para remanufatura estruturada de novas placas aceleradoras.',
      metric: 'Recuperação de até 90% dos metais raros do chip'
    }
  ]
};

export const odsGoals: OdsGoal[] = [
  {
    id: 'ods9',
    number: 9,
    name: 'Indústria, Inovação e Infraestrutura',
    tagline: 'Construir infraestruturas resilientes e incentivar a inovação.',
    colorClass: 'border-orange-500/30 text-orange-400 focus-within:ring-orange-500',
    badgeColor: 'bg-orange-600 text-white',
    connectionText: 'A inovação de IA precisa ser amparada por uma infraestrutura verde e sustentável. Isto significa planejar data centers de alta eficiência térmica, redes ópticas inteligentes e chips de altíssima condutividade, evitando que o progresso digital canibalize recursos naturais básicos.',
    unTargets: [
      'Meta 9.4: Modernizar a infraestrutura e reabilitar as indústrias para torná-las sustentáveis, com maior eficiência no uso de recursos.',
      'Meta 9.b: Apoiar o desenvolvimento tecnológico doméstico, a pesquisa e a inovação nos países em desenvolvimento.'
    ]
  },
  {
    id: 'ods12',
    number: 12,
    name: 'Consumo e Produção Responsáveis',
    tagline: 'Assegurar padrões de produção e de consumo sustentáveis.',
    colorClass: 'border-amber-500/30 text-amber-400 focus-within:ring-amber-500',
    badgeColor: 'bg-amber-600 text-white',
    connectionText: 'Os modelos de negócios de IA devem ser projetados a partir do princípio do consumo racional. Do lado do usuário, desencoraja-se as gerações frívolas repetitivas. Do lado corporativo, adota-se métricas do custo de carbono por requisição para frear desperdícios inúteis de computação.',
    unTargets: [
      'Meta 12.2: Alcançar a gestão sustentável e o uso eficiente dos recursos naturais.',
      'Meta 12.5: Reduzir substancialmente a geração de resíduos por meio da prevenção, redução, reciclagem e reuso.'
    ]
  },
  {
    id: 'ods13',
    number: 13,
    name: 'Ação Contra a Mudança Global do Clima',
    tagline: 'Tomar medidas urgentes para combater a mudança climática e seus impactos.',
    colorClass: 'border-green-500/30 text-green-400 focus-within:ring-green-500',
    badgeColor: 'bg-green-600 text-white',
    connectionText: 'Os data centers não podem contribuir desastrosamente para o aumento das emissões mundiais. Utilizar IA de forma proativa para modelagem de tempestades, detecção precoce de frentes de secas e gestão de energias alternativas é a maior contribuição tecnológica para atenuar as crises climáticas atuais.',
    unTargets: [
      'Meta 13.3: Melhorar a educação, conscientização e capacidade humana e institucional sobre mitigação e impacto das alterações climáticas.',
      'Meta 13.b: Promover mecanismos para a criação de capacidades para planejamento e gestão integrada para o enfrentamento climáticos.'
    ]
  }
];

export const articles: Article[] = [
  {
    id: 'art1',
    title: 'A Pegada de Carbono Invisível da Inteligência Artificial',
    summary: 'Atrás de cada tela brilhante e resposta inteligente, milhares de servidores queimam eletricidade para processar linguagem natural. Entenda a escala do problema.',
    content: [
      'Quando você pede para um assistente de IA corrigir sua redação ou escrever um e-mail curto, a ação parece limpa, abstrata e instantânea. No entanto, sua requisição percorre centenas de quilômetros de cabos de fibra óptica até alcançar um complexo industrial de alta tecnologia: um data center.',
      'Esses templos de silício abrigam milhares de aceleradores dedicados chamados GPUs. Cada letra calculada exige bilhões de cálculos de probabilidade matemática, gerando calor e consumindo energia de maneira vigorosa. De acordo com climatologistas, a inferência por inteligência artificial é dezenas vezes mais poluente que uma busca tradicional indexada no Google.',
      'Estimativas sugerem que, se as ferramentas atuais forem integradas a todas as buscas mundiais instantaneamente, o consumo somado necessitaria de infraestruturas fósseis adicionais equivalentes a reatores dedicados exclusivamente à inteligência computacional. O combate a essa pegada passa pela auditoria transparente de carbono pelas grandes multinacionais.'
    ],
    author: 'Dra. Helena Mendes',
    date: '15 Mai 2026',
    readTime: '5 min de leitura',
    category: 'Energologia e Clima',
    imgUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art2',
    title: 'Data Centers e o Silencioso Consumo de Água Potável',
    summary: 'Para evitar o superaquecimento de chips de inteligência artificial, milhões de litros de água são evaporados dos sistemas diariamente. Saiba o que pode ser feito.',
    content: [
      'O resfriamento é o principal gargalo de segurança em qualquer estrutura de alta intensidade térmica de silício. Conforme novos chips Nvidia ou AMD aumentam suas densidades em watts, fazeres tradicionais baseados em ar condicionado tornam-se redundantes.',
      'A solução utilizada pela grande maioria das Big Techs é a evaporação em torres abertas. A água do sistema absorve o calor expelido pelos racks de silício e é dispersada para fora através de dutos úmidos. Embora economize megawatts elétricos relevantes, esse método literal expele água tratada na atmosfera local em locais secos.',
      'Visto que muitos data-centers são construídos em estados desérticos, como Arizona (EUA), ou zonas agrícolas sobrecarregadas, o desvio de poços artesianos diminui mananciais subterrâneos históricos. Alternativas como resfriamento por imersão líquida em fluidos sintéticos sustentáveis estão ganhando tração para reverter essa crise silenciosa.'
    ],
    author: 'Prof. Lucas Vasconcelos',
    date: '10 Mai 2026',
    readTime: '6 min de leitura',
    category: 'Recursos Hídricos',
    imgUrl: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art3',
    title: 'Como Usar a Inteligência Artificial Gratuitamente sem Agredir a Terra',
    summary: 'Pequenas mudanças no nosso comportamento cotidiano com a tecnologia digital podem ajudar a economizar megawatts em escala coletiva. Pratique a IA Consciente.',
    content: [
      'A mudança de paradigma começa com o discernimento humano individual. Pergunte-se se as solicitações para Inteligência Artificial possuem real necessidade de repetição estética e computação iterativa ou se poderiam ser consolidadas.',
      'Por exemplo, pedir para a IA regenerar dez vezes o mesmo parágrafo atrás de uma palavra sinônimo sutil consome o equivalente a semanas de lâmpadas LED domésticas ativas em paralelo. De igual forma, a geração repetitiva e compulsiva de imagens em alta definição sobrecarrega chips gráficos muito mais que um prompt de texto simples.',
      'Valorize também a escolha de plataformas que demonstram compromisso sincero com neutralidade climática ativa de escopo 3 e que usam matrizes limpas locais para sua computação. Consumo sustentável implica em compreender e respeitar o peso por trás do invisível.'
    ],
    author: 'Beatriz Alencar',
    date: '02 Mai 2026',
    readTime: '4 min de leitura',
    category: 'Consumo Consciente',
    imgUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art4',
    title: 'A IA como Aliada no Combate às Mudanças Climáticas',
    summary: 'Cálculos de precisão, previsões meteorológicas avançadas e otimização inteligente de transportes. Como a tecnologia também é indispensável para proteger a biosfera.',
    content: [
      'Embora o rastro material dos data centers seja indiscutivelmente problemático, a Inteligência Artificial detém um potencial revolucionário sem precedentes para catalisar soluções ambientais.',
      'Pesquisadores utilizam algoritmos de deep learning para modelar novas moléculas usadas em catalisadores químicos de carbono, prever correntes térmicas para instalação de usinas eólicas com ganho de 30% de eficiência, e otimizar rotas de trens e navios cargueiros minimizando desperdício de diesel.',
      'Portanto, o debate da sustentabilidade digital não deve tender à aversão tecnológica, mas ao direcionamento político e científico estratégico: usar a ferramenta certa, alimentada por energias limpas, para endereçar as maiores vulnerabilidades existenciais humanas.'
    ],
    author: 'Dr. Roberto Cruz',
    date: '28 Abr 2026',
    readTime: '7 min de leitura',
    category: 'Soluções Verdes',
    imgUrl: 'https://images.unsplash.com/photo-1530631673369-bc24f5857841?q=80&w=800&auto=format&fit=crop'
  }
];

export const goodPractices: GoodPractice[] = [
  {
    id: 'gp1',
    title: 'Consciência na Redação de Prompts',
    description: 'Evite prompts curtos repetidos interminavelmente no modelo. Planeje o que deseja de maneira encadeada em uma única pergunta clara para poupar múltiplos processamentos.',
    category: 'Processamento Eficiente',
    impactLevel: 'Alto',
    colorClass: 'border-emerald-500/30'
  },
  {
    id: 'gp2',
    title: 'Escolha Ferramentas Leves para Uso de Texto',
    description: 'Use IAs leves (SLMs - Small Language Models) no lugar de modelos multi-bilionários de última geração, a menos que esteja solucionando dilemas sofisticados que peçam alta cognição.',
    category: 'Economia de Silício',
    impactLevel: 'Sustentável',
    colorClass: 'border-green-500/30'
  },
  {
    id: 'gp3',
    title: 'Moderação na Geração de Imagens e Vídeo',
    description: 'A geração de arquivos multimodais usa até 10 a 50 vezes mais processamento de ponta que simples textos. Minimize replanações de imagens por diversão decorativa.',
    category: 'Multimodalidade Reduzida',
    impactLevel: 'Alto',
    colorClass: 'border-emerald-500/30'
  },
  {
    id: 'gp4',
    title: 'Pesquise a Matriz Energética Provedora',
    description: 'Priorize e apoie empresas Big Tech com metas claras e auditadas de compensação climática verdadeira e data centers sediados em países de energia majoritariamente hidráulica ou eólica.',
    category: 'Responsabilidade Social',
    impactLevel: 'Médio',
    colorClass: 'border-amber-500/30'
  },
  {
    id: 'gp5',
    title: 'Estenda a Longevidade dos Seus Aparelhos',
    description: 'Não substitua computadores e tablets apenas para acompanhar pequenos recursos locais de IA. Hardwares bem conservados diminuem o descarte hídrico na fase produtiva de silício.',
    category: 'Combate ao Lixo Eletrônico',
    impactLevel: 'Sustentável',
    colorClass: 'border-green-500/30'
  },
  {
    id: 'gp6',
    title: 'Apoie Projetos de IA Aberta de Código Consciente',
    description: 'Incentive engenheiros que trabalham na compressão de peso de arquivos neuronais. Algoritmos mais leves rodam em computação local de baixo consumo sem requisições na nuvem.',
    category: 'Green Tech Avançado',
    impactLevel: 'Alto',
    colorClass: 'border-emerald-500/30'
  }
];
