/* Dados reais — Giula Rolim */

const photos = [
  {
    id: 1,
    title: "Momento especial",
    description: "Um instante que ficou guardado com carinho. Às vezes uma foto simples carrega o sentimento inteiro de uma fase."
  },
  {
    id: 2,
    title: "Momentos inesquecíveis",
    description: "Os dias que não cabem em uma legenda: recreios, trabalhos em grupo, risadas no corredor e as pequenas vitórias que só quem viveu sabe o valor."
  },
  {
    id: 3,
    title: "Meu melhor amigo",
    description: "Em 11 de fevereiro de 2025 eu adotei meu gatinho. Desde então ele virou meu melhor amigo. A gente brinca junto, ele me acompanha nos dias cansativos e enche a casa de leveza. Melhor decisão."
  },
  {
    id: 4,
    title: "Me ajudou em momentos difíceis gerados pela escola",
    description: "Teve fases em que a escola pesou, com provas, pressão e mudanças. Ter com quem contar, pessoas e também o meu gatinho, fez diferença. Gratidão por cada apoio."
  }
];

const schools = [
  {
    tag: "2009 — ~2014",
    name: "Colégio Adventista do Alto Boqueirão",
    period: "Do pré ao 4º ano",
    story: "Foi aqui que tudo começou. Do pré até o quarto ano, o Adventista do Alto Boqueirão foi o primeiro chão da minha vida escolar. O cheiro de lápis de cor, as rodinhas de conversa, aprender a escrever o próprio nome e as primeiras amizades ainda fazem parte das memórias mais antigas. A rotina era segura e carinhosa, e cada desenho colado na parede parecia uma grande conquista.",
    moments: [
      "As primeiras letras e o orgulho de conseguir ler sozinha",
      "Brincadeiras no recreio e as amizades da infância",
      "Apresentações e datas comemorativas que animavam a turma"
    ],
    learn: "Aprendi que a escola podia ser um lugar de descoberta e acolhimento. A base de tudo começou ali."
  },
  {
    tag: "~2015 — 2016",
    name: "Sagrado Coração da Nicola Pellanda",
    period: "5º e 6º ano",
    story: "A mudança para o Sagrado Coração da Nicola Pellanda trouxe um ambiente novo, novos rostos e a necessidade de me adaptar. Foram dois anos de transição, com salas diferentes, professores novos e a sensação de estar crescendo um pouco mais rápido. Foi um período de observar, fazer novas amizades e descobrir que eu conseguia me encontrar em outro lugar também.",
    moments: [
      "A adaptação aos novos colegas e à rotina diferente",
      "Trabalhos e apresentações que pediam mais autonomia",
      "O sentimento de estar de passagem, mas ainda assim presente"
    ],
    learn: "Mudar de escola ensina flexibilidade. Mesmo em pouco tempo, dá para criar laços e aprender coisas que ficam."
  },
  {
    tag: "~2017 — 2026",
    name: "Colégio Morelli",
    period: "Do 7º ano ao 3º ano do Ensino Médio",
    story: "O Morelli foi a escola onde passei mais tempo e onde me formei. Do sétimo ano até o terceiro do médio, foram anos de crescimento de verdade, com amizades mais profundas, professores que marcaram, redações, provas, projetos e a pressão natural do final do ciclo. Foi aqui que a escrita ganhou mais espaço na minha vida e que eu vivi a maior parte da adolescência. Os corredores, as salas e as pessoas desse lugar ficam comigo.",
    moments: [
      "As amizades que atravessaram vários anos",
      "As redações e o desenvolvimento da escrita",
      "O terceiro ano, os desafios finais e a formatura"
    ],
    learn: "Levo a gratidão por ter tido um lugar para crescer por tanto tempo. O Morelli guarda a maior parte da minha história."
  }
];

const surprises = {
  gato: {
    html: `<span class="big">🐱</span>
      <p><strong>11 de fevereiro de 2025</strong></p>
      <p>Foi o dia em que adotei meu gatinho. Desde então ele virou meu melhor amigo. A gente brinca junto, ele aparece nos momentos de cansaço e transforma qualquer dia mais pesado em algo mais leve. Melhor companhia.</p>`
  },
  carta: {
    html: `<span class="big">✉️</span>
      <p>Se você está lendo isso, obrigada por abrir esta página do diário. Cada clique é um pouco de história sendo vista. Cuide das suas memórias também, elas valem muito.</p>`
  }
};

/* 17 redações originais — numeração mantida conforme ordem enviada */
const essays = [
  {
    number: 1,
    title: "Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico",
    preview: "Na obra Ideias para Adiar o Fim do Mundo, o escritor Ailton Krenak apresenta críticas à forma como a sociedade se relaciona com a natureza...",
    text: `Na obra Ideias para Adiar o Fim do Mundo, o escritor Ailton Krenak apresenta críticas à forma como a sociedade se relaciona com a natureza, destacando os impactos da exploração dos recursos naturais. Fora da literatura, essa realidade também está presente no Brasil, onde as mudanças no ciclo hidrológico têm provocado problemas cada vez mais preocupantes, como períodos prolongados de seca e enchentes intensas. Essas situações afetam diretamente a vida da população, causando perdas materiais, dificuldades econômicas e problemas de acesso à água. Nesse contexto, a falta de planejamento público e os impactos das mudanças climáticas constituem fatores que agravam esse cenário.

Em primeiro lugar, destaca-se a falta de infraestrutura e planejamento como um dos principais problemas relacionados aos eventos climáticos extremos. Isso ocorre porque muitas cidades brasileiras não possuem sistemas adequados de drenagem, abastecimento e prevenção de desastres. Como consequência, durante períodos de chuva intensa, ocorrem alagamentos, deslizamentos e destruição de moradias, enquanto as regiões afetadas pela seca enfrentam dificuldades no acesso à água. Dessa forma, a ausência de medidas preventivas aumenta os prejuízos e coloca em risco a segurança de milhares de pessoas.

Além disso, as mudanças no ciclo hidrológico provocam impactos significativos na economia brasileira. Isso acontece porque a agricultura e a pecuária dependem diretamente da disponibilidade de água para manter suas atividades. Durante períodos de estiagem, a falta de chuva prejudica as plantações e reduz a produção de alimentos. Por outro lado, as enchentes podem destruir lavouras, estradas e propriedades rurais, causando prejuízos aos trabalhadores e aumentando os preços de determinados produtos. Assim, tanto a seca quanto o excesso de chuvas afetam a produção e dificultam a estabilidade econômica do país.

Portanto, é necessário reduzir os impactos sociais e econômicos causados pelas mudanças no ciclo hidrológico. Para isso, o Governo Federal, em parceria com as prefeituras e o Ministério do Meio Ambiente, deve ampliar os investimentos em infraestrutura e prevenção de desastres, por meio da construção de sistemas de drenagem, da melhoria das redes de abastecimento e da criação de planos de emergência para regiões vulneráveis. Além disso, devem ser promovidas campanhas de conscientização sobre o uso responsável da água e a preservação ambiental. Essas medidas têm como finalidade diminuir os prejuízos causados pelos eventos extremos e proteger a população. Dessa maneira, será possível construir cidades mais preparadas e garantir melhores condições de vida para as futuras gerações.`
  },
  {
    number: 2,
    title: "A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras",
    preview: "Assim como retratado no filme O Diabo Veste Prada, em que a protagonista é submetida à pressão social para se adequar a padrões estéticos...",
    text: `Assim como retratado no filme O Diabo Veste Prada, em que a protagonista é submetida à pressão social para se adequar a padrões estéticos, a popularização das canetas emagrecedoras evidencia a busca excessiva pelo corpo considerado ideal na sociedade contemporânea. Esses medicamentos, como Ozempic e Wegovy, atuam no controle do apetite e possuem indicações médicas específicas. Entretanto, observa-se que sua utilização indiscriminada, impulsionada principalmente pelas redes sociais, representa um problema de saúde pública. Nesse contexto, tal problemática é sustentada, sobretudo, pela influência dos padrões de beleza e pela dificuldade de acesso aos medicamentos por pacientes que realmente necessitam deles.

Em primeiro lugar, é importante destacar que a pressão estética contribui diretamente para o uso inadequado desses medicamentos. Nesse sentido, plataformas digitais, como Instagram e TikTok, frequentemente disseminam padrões de beleza inalcançáveis, reforçados por celebridades e influenciadores digitais. Como consequência, indivíduos passam a enxergar o emagrecimento rápido como uma necessidade para alcançar aceitação social, recorrendo às canetas emagrecedoras sem a devida indicação médica. Isso demonstra como a busca pela aprovação social pode se sobrepor aos cuidados com a própria saúde, levando indivíduos a priorizarem a aparência em detrimento do bem-estar. Dessa forma, a busca pela aparência ideal acaba se sobrepondo aos cuidados com a própria saúde.

Além disso, o uso indiscriminado desses medicamentos pode comprometer o acesso de pacientes que dependem deles para tratamentos de saúde. Conforme noticiado por veículos de comunicação, como o G1 e a BBC News Brasil, a popularização desses produtos esteve associada a episódios de escassez, prejudicando pessoas que necessitam de acompanhamento médico e tratamento adequado. Assim, a utilização sem indicação clínica ultrapassa uma questão individual e passa a representar um problema coletivo, uma vez que a procura excessiva pode afetar a disponibilidade dos medicamentos e contribuir para o aumento dos preços. Consequentemente, esse cenário evidencia a importância de garantir que os medicamentos estejam disponíveis, principalmente, para aqueles que realmente precisam deles por motivos de saúde.

Portanto, é necessário combater o uso indiscriminado das canetas emagrecedoras no Brasil. Para isso, o Ministério da Saúde, em parceria com a Agência Nacional de Vigilância Sanitária (Anvisa), deve promover campanhas de conscientização sobre os riscos da utilização sem prescrição e a importância do acompanhamento profissional, por meio de propagandas televisivas e publicações informativas nas redes sociais, a fim de reduzir a influência da pressão estética sobre a população. Ademais, a Anvisa deve fortalecer a fiscalização da comercialização desses medicamentos e acompanhar sua distribuição, garantindo prioridade aos pacientes com indicação clínica. Dessa maneira, será possível proteger a saúde pública e combater a busca irresponsável por padrões estéticos.`
  },
  {
    number: 3,
    title: "O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?",
    preview: "No filme Blade Runner 2049, é retratada a relação entre o protagonista K, um policial, e uma inteligência artificial com características emocionais...",
    text: `No filme Blade Runner 2049, é retratada a relação entre o protagonista K, um policial, e uma inteligência artificial com características emocionais, situação que permite refletir sobre a crescente aproximação entre seres humanos e tecnologias. Fora da ficção, desde os anos 2000, a internet e os recursos tecnológicos passaram por um avanço significativo, tornando-se cada vez mais presentes no cotidiano da população. Entretanto, embora a inteligência artificial ofereça benefícios para diferentes setores sociais, seu uso inadequado, especialmente na criação de conteúdos falsos, representa um desafio para a sociedade, pois dificulta a distinção entre informações verdadeiras e fictícias.

Em primeiro lugar, é importante destacar que a inteligência artificial proporciona avanços significativos em diversas áreas, como medicina, agronomia, mecânica e educação. Na agricultura, por exemplo, a utilização de drones e sistemas inteligentes permite monitorar plantações, identificar possíveis problemas e acompanhar o desenvolvimento das lavouras. Dessa forma, a tecnologia contribui para aumentar a eficiência das atividades e facilitar o trabalho humano. Assim, quando utilizada de maneira responsável, a inteligência artificial torna-se uma importante ferramenta para o desenvolvimento social e econômico.

Contudo, apesar dos benefícios, a utilização inadequada da inteligência artificial, principalmente por meio das deepfakes, pode gerar consequências negativas. Isso ocorre porque essa tecnologia permite criar vídeos, imagens e áudios falsos, reproduzindo a aparência e a voz de pessoas reais, o que pode facilitar a disseminação de informações enganosas. Além disso, muitas pessoas compartilham conteúdos nas redes sociais sem verificar sua veracidade, contribuindo para a propagação de notícias falsas e possíveis golpes. Nesse sentido, a ausência de orientação sobre o uso consciente dessas tecnologias pode ampliar a vulnerabilidade dos indivíduos e comprometer sua privacidade.

Portanto, é fundamental que o Poder Legislativo, em parceria com o Ministério da Educação, desenvolva medidas para garantir o uso responsável da inteligência artificial no Brasil. Isso deve ocorrer por meio da criação e do fortalecimento de leis que protejam os dados pessoais dos cidadãos, bem como da implementação de projetos de educação digital nas escolas, com palestras e atividades educativas sobre os benefícios e os riscos dessas ferramentas. Ademais, é importante orientar os estudantes sobre como identificar conteúdos manipulados e verificar a veracidade das informações compartilhadas na internet. Dessa maneira, será possível preparar as novas gerações para lidar com os avanços tecnológicos de forma consciente, equilibrada e segura.`
  },
  {
    number: 4,
    title: "Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros",
    preview: "Atualmente, as apostas esportivas, conhecidas como “bets”, estão cada vez mais presentes na vida dos jovens...",
    text: `Atualmente, as apostas esportivas, conhecidas como “bets”, estão cada vez mais presentes na vida dos jovens. Com a facilidade de acesso por meio dos celulares, muitos estudantes acabam gastando parte de seu dinheiro nessas plataformas, o que pode trazer consequências para sua vida pessoal e acadêmica. Em alguns casos, o dinheiro que poderia ser utilizado para transporte, alimentação, materiais ou outras necessidades acaba sendo destinado às apostas. Nesse contexto, a busca por ganhos rápidos pode transformar uma atividade de entretenimento em um problema financeiro e social.

Em primeiro lugar, os prejuízos financeiros representam uma das principais consequências do uso excessivo dessas plataformas. Muitos jovens, influenciados pela divulgação de ganhos nas redes sociais e pela expectativa de conseguir dinheiro facilmente, acabam realizando apostas frequentes e gastando quantias que não podem perder. Como resultado, podem acumular dívidas e comprometer parte de sua renda, prejudicando até mesmo o pagamento de despesas básicas.

Além dos prejuízos financeiros, o excesso de tempo e atenção dedicado às bets pode afetar o desempenho dos estudantes. A preocupação em recuperar o dinheiro perdido ou a expectativa por uma aposta vencedora pode causar distração, ansiedade e falta de concentração nos estudos. Como consequência, alguns jovens podem faltar às aulas, deixar trabalhos para depois e até atrasar a conclusão da faculdade. Isso demonstra que os impactos das apostas não se limitam à questão financeira, podendo também comprometer o desenvolvimento pessoal e as oportunidades profissionais dos estudantes.

Portanto, é importante combater os efeitos negativos das apostas esportivas entre os jovens brasileiros. Para isso, o Ministério da Educação, em parceria com as instituições de ensino, deve promover campanhas de conscientização e atividades de educação financeira, por meio de palestras e projetos educativos que apresentem os riscos das apostas e incentivem o uso responsável do dinheiro. Além disso, as famílias devem orientar os jovens sobre os perigos do endividamento, a fim de evitar que as apostas prejudiquem sua vida pessoal e acadêmica. Dessa maneira, será possível reduzir os impactos das bets e preservar o futuro dos estudantes.`
  },
  {
    number: 5,
    title: "Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea",
    preview: "Na sociedade contemporânea, o acesso à tecnologia tornou-se fundamental para a realização de diversas atividades...",
    text: `Na sociedade contemporânea, o acesso à tecnologia tornou-se fundamental para a realização de diversas atividades, como estudar, trabalhar, buscar informações e utilizar serviços públicos. No entanto, no Brasil, a desigualdade social e a falta de infraestrutura ainda dificultam o acesso de parte da população ao meio digital. Dessa forma, a inclusão digital brasileira enfrenta obstáculos relacionados tanto às condições econômicas quanto à falta de conhecimento tecnológico.

Em primeiro lugar, a desigualdade socioeconômica contribui diretamente para a exclusão digital. Muitas famílias de baixa renda não possuem condições de adquirir computadores, celulares adequados ou contratar uma internet de qualidade. Além disso, moradores de regiões rurais e áreas afastadas dos grandes centros urbanos podem enfrentar dificuldades devido à ausência de infraestrutura de conexão. Consequentemente, essas pessoas ficam limitadas no acesso à educação, ao mercado de trabalho e a serviços essenciais, o que aumenta ainda mais as diferenças de oportunidades entre os grupos sociais.

Ademais, possuir acesso à internet não significa, necessariamente, saber utilizá-la de maneira eficiente e segura. Parte da população, principalmente pessoas com pouca familiaridade com as novas tecnologias, encontra dificuldades para utilizar plataformas digitais, realizar serviços on-line e identificar informações falsas. Essa dificuldade pode comprometer a autonomia dos indivíduos, tornando-os mais dependentes de outras pessoas para realizar atividades que poderiam ser feitas de forma independente. Nesse sentido, a falta de educação digital amplia a desigualdade, pois aqueles que não dominam as ferramentas tecnológicas possuem menos oportunidades de aproveitar os benefícios proporcionados pela internet.

Portanto, é necessário combater a exclusão digital no Brasil. Para isso, o Governo Federal, em parceria com estados e municípios, deve ampliar os investimentos em infraestrutura de internet, especialmente em regiões rurais e comunidades de baixa renda, por meio da instalação de redes de alta velocidade e da criação de pontos públicos de acesso. Além disso, o Ministério da Educação deve promover programas de capacitação digital em escolas, bibliotecas e centros comunitários, ensinando a população a utilizar a tecnologia de forma segura e consciente. Assim, será possível democratizar o acesso ao mundo digital e reduzir as desigualdades sociais existentes no país.`
  },
  {
    number: 6,
    title: "Cultura fitness: bem-estar ou busca por uma estética inatingível?",
    preview: "Na obra cinematográfica “A Substância”, o enredo retrata um cenário marcado pela obsessão pela juventude eterna...",
    text: `Na obra cinematográfica “A Substância”, o enredo retrata um cenário marcado pela obsessão pela juventude eterna, pelos padrões de beleza inatingíveis e pela misoginia na indústria do entretenimento. Coralie Fargeat utiliza o terror corporal para mostrar como a busca pela perfeição pode levar à autodestruição, fazendo com que a protagonista se torne sua própria inimiga ao rejeitar o envelhecimento. Guardadas as devidas proporções, essa realidade se assemelha ao cenário atual da cultura fitness, uma vez que, embora incentive hábitos saudáveis, também pode reforçar padrões corporais irreais e prejudicar a saúde mental de muitos jovens.

Em primeira análise, a busca pelo chamado “corpo perfeito” pode trazer consequências negativas para a saúde dos indivíduos. Isso ocorre porque a influência da mídia e das redes sociais contribui para a insatisfação com a própria imagem, levando muitas pessoas a adotarem medidas extremas para se encaixarem nos padrões de beleza. Entre essas práticas, destacam-se as dietas restritivas, os jejuns prolongados e o uso de laxantes, que podem causar transtornos alimentares e graves problemas de saúde. Além disso, a exposição constante a imagens de corpos definidos e fotografias editadas incentiva comparações e faz com que muitos jovens se sintam insatisfeitos com a própria aparência. Dessa forma, aquilo que deveria estar relacionado ao bem-estar acaba se tornando uma preocupação excessiva com a estética.

Além disso, as redes sociais contribuem para a manutenção desses padrões de beleza. O contato frequente com conteúdos que mostram corpos considerados ideais faz com que muitos indivíduos passem a acreditar que precisam alcançar determinada aparência para serem aceitos pela sociedade. Como consequência, sentimentos de angústia, insegurança e insatisfação pessoal tornam-se cada vez mais presentes. Assim, a cultura fitness, quando associada à cobrança por um corpo perfeito, deixa de representar apenas um cuidado com a saúde e passa a prejudicar a autoestima de muitos jovens.

Portanto, é necessário combater os impactos negativos da busca por padrões estéticos na sociedade. Para isso, o Ministério da Educação, em parceria com as escolas, deve promover palestras e campanhas sobre autoestima e saúde mental, por meio de debates e projetos educativos. Além disso, as plataformas digitais devem fiscalizar conteúdos que incentivem hábitos prejudiciais à saúde. Essa medida tem como finalidade conscientizar os jovens sobre os riscos da busca excessiva pela perfeição estética. Assim, será possível valorizar o bem-estar e incentivar uma relação mais saudável com o próprio corpo.`
  },
  {
    number: 8,
    title: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
    preview: "A história do Brasil é marcada pela presença dos povos indígenas, que contribuíram significativamente para a formação da identidade cultural...",
    text: `A história do Brasil é marcada pela presença dos povos indígenas, que contribuíram significativamente para a formação da identidade cultural, social e histórica do país. Entretanto, desde a chegada dos colonizadores portugueses, essas populações enfrentam processos de exploração, violência, discriminação e perda de seus territórios. Apesar dos avanços conquistados ao longo dos anos, especialmente com a Constituição Federal de 1988, os povos originários ainda encontram dificuldades para ter seus direitos respeitados e sua cidadania plenamente reconhecida.

Nesse contexto, a Constituição Federal de 1988 representou um importante avanço na proteção dos direitos indígenas, principalmente por meio dos artigos 231 e 232. Esses dispositivos reconhecem a organização social, os costumes, as línguas, as crenças e as tradições indígenas, além de garantir os direitos originários sobre as terras tradicionalmente ocupadas. Dessa forma, a legislação brasileira passou a reconhecer os povos indígenas como sujeitos de direitos, respeitando suas identidades e suas formas próprias de organização. Contudo, ainda existe uma grande distância entre os direitos garantidos pela Constituição e a realidade enfrentada por essas comunidades.

Um dos principais desafios para a efetivação da cidadania indígena é a demarcação e a proteção de seus territórios. A demora nos processos de demarcação, as invasões de terras, o garimpo ilegal e o desmatamento colocam em risco não apenas a sobrevivência dessas populações, mas também a preservação de suas culturas e tradições. Afinal, para os povos indígenas, a terra não representa apenas um espaço físico, mas está diretamente relacionada à sua história, espiritualidade, identidade e sobrevivência. Assim, quando seus territórios são ameaçados, seus direitos fundamentais também são violados.

Além disso, as dificuldades de acesso à educação, à saúde e às políticas públicas também prejudicam a cidadania indígena. Embora a Constituição assegure direitos sociais a todos os cidadãos, muitos indígenas ainda enfrentam obstáculos para receber atendimento médico de qualidade e ter acesso a uma educação que respeite suas línguas e tradições. Outro problema relevante é o preconceito, que contribui para a exclusão social e dificulta o reconhecimento dos povos originários como parte fundamental da sociedade brasileira.

Portanto, é necessário que o Estado fortaleça as políticas públicas voltadas à proteção dos direitos indígenas, garantindo a demarcação e a fiscalização de seus territórios, o acesso à saúde e à educação diferenciadas e o combate à discriminação. Também é fundamental ampliar a participação dos representantes indígenas nas decisões políticas que afetam suas comunidades, respeitando sua autonomia e seus modos de vida. A sociedade, por sua vez, deve contribuir para a valorização da diversidade cultural e para o reconhecimento da importância histórica desses povos. Dessa maneira, será possível garantir que os direitos previstos na Constituição sejam respeitados, construindo uma sociedade mais justa, que reconheça e valorize aqueles que fazem parte das próprias raízes do Brasil.`
  },
  {
    number: 9,
    title: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
    preview: "No documentário O Dilema das Redes, dirigido por Jeff Orlowski, são apresentados mecanismos utilizados pelas plataformas digitais...",
    text: `No documentário O Dilema das Redes, dirigido por Jeff Orlowski, são apresentados mecanismos utilizados pelas plataformas digitais para selecionar conteúdos de acordo com os interesses e comportamentos dos usuários. Nesse contexto, os algoritmos deixam de atuar apenas como ferramentas de organização da informação e passam a influenciar hábitos, opiniões e escolhas de consumo. Assim, na sociedade contemporânea, a exposição contínua a referências personalizadas pode contribuir para a formação de novos modos de vida e para a reprodução de determinados padrões culturais e comportamentais.

Do mesmo modo, destaca-se a influência dos algoritmos sobre os hábitos de consumo. Segundo a TIC Domicílios 2024, 81% dos usuários de Internet no Brasil utilizaram redes sociais, enquanto 56% buscaram informações sobre produtos ou serviços no ambiente digital. Nesse cenário, os algoritmos analisam os interesses e comportamentos dos usuários para direcionar conteúdos e anúncios personalizados, tornando determinadas mercadorias e estilos de vida mais presentes no cotidiano. Dessa forma, a mídia digital pode contribuir para a criação de padrões de consumo, uma vez que aquilo que aparece repetidamente nas telas passa a influenciar referências, preferências e escolhas dos indivíduos.

Além disso, a influência algorítmica contribui para a padronização dos modos de vida na sociedade contemporânea. Isso ocorre porque as plataformas digitais priorizam conteúdos capazes de gerar maior interação, fazendo com que determinadas tendências, comportamentos e padrões culturais sejam constantemente reproduzidos. Como consequência, a exposição contínua às mesmas referências pode limitar a diversidade de perspectivas e estimular os indivíduos a adaptar seus hábitos e escolhas aos modelos valorizados no ambiente virtual.

Nesse sentido, torna-se necessário reduzir os impactos da influência algorítmica sobre os modos de vida na sociedade contemporânea. Para isso, o Ministério da Educação, em parceria com instituições de ensino e plataformas digitais, deve promover ações de educação, por meio de palestras, campanhas e atividades escolares que ensinam os cidadãos a identificar conteúdos personalizados, publicidade e padrões de comportamento disseminados pelos algoritmos. Além disso, as plataformas devem ampliar a transparência sobre os critérios de recomendação de conteúdos. Dessa maneira, será possível estimular usuários mais conscientes e preservar a diversidade cultural e a autonomia nas escolhas de consumo e de estilo de vida.`
  },
  {
    number: 10,
    title: "Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo",
    preview: "A preservação dos monumentos históricos é fundamental para a valorização da memória e da identidade cultural de uma sociedade...",
    text: `A preservação dos monumentos históricos é fundamental para a valorização da memória e da identidade cultural de uma sociedade. No Brasil, construções antigas, igrejas, museus e patrimônios arquitetônicos representam importantes registros da história nacional, contribuindo para a compreensão das diferentes culturas que formaram o país. Entretanto, apesar de sua relevância, muitos desses espaços enfrentam problemas relacionados à falta de investimentos, ao abandono e à ausência de políticas públicas eficientes. Nesse sentido, a negligência do poder público e a falta de conscientização da população dificultam a preservação do patrimônio histórico brasileiro.

Em primeiro lugar, destaca-se a falta de investimentos governamentais como um dos principais obstáculos à conservação dos monumentos históricos. Isso ocorre porque muitos patrimônios necessitam de reformas, manutenção e fiscalização constantes, mas acabam sendo deixados de lado devido à insuficiência de recursos e ao descaso das autoridades. Como consequência, construções importantes sofrem com a deterioração, podendo perder suas características originais ou até mesmo desaparecer. Essa situação coloca em risco não apenas as estruturas físicas desses espaços, mas também a memória cultural que representam.

Além disso, a falta de conhecimento e de valorização da história por parte da sociedade também contribui para esse cenário. Muitas pessoas não reconhecem a importância dos monumentos históricos e, por isso, não compreendem a necessidade de protegê-los. Atitudes como pichações, depredações e descarte inadequado de lixo prejudicam esses espaços e demonstram a ausência de conscientização sobre a preservação do patrimônio coletivo. Dessa forma, quando a população não valoriza sua própria história, a identidade cultural e a memória das futuras gerações ficam ameaçadas.

Portanto, torna-se necessário combater os desafios que dificultam a preservação dos monumentos históricos no Brasil. Para isso, o Governo Federal, em parceria com o Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN) e as prefeituras, deve ampliar os investimentos destinados à restauração e à conservação dos patrimônios históricos, por meio da criação de projetos de manutenção, fiscalização e recuperação dos espaços deteriorados. Além disso, o Ministério da Educação, juntamente com as escolas, deve promover campanhas educativas, palestras e visitas culturais, com o objetivo de conscientizar os estudantes sobre a importância da memória histórica e do respeito ao patrimônio público. Essas ações devem ser realizadas de maneira acessível e inclusiva, garantindo a participação de toda a população. Assim, será possível preservar a história brasileira, fortalecer a identidade cultural e assegurar que as próximas gerações tenham acesso a esse importante legado.`
  },
  {
    number: 11,
    title: "Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social",
    preview: "Na obra Frankenstein, de Mary Shelley, a criação científica do protagonista evidencia os riscos de um progresso sem responsabilidade...",
    text: `Na obra Frankenstein, de Mary Shelley, a criação científica do protagonista evidencia os riscos de um progresso sem responsabilidade. De maneira semelhante, na sociedade contemporânea, a exploração espacial representa um importante avanço científico, mas também levanta questionamentos sobre seus impactos sociais e ambientais. Nesse contexto, a falta de fiscalização das atividades espaciais e a desigualdade no acesso aos benefícios dessas descobertas constituem desafios para conciliar o desenvolvimento científico com a responsabilidade social.

Em primeiro lugar, a fiscalização insuficiente dificulta o controle dos impactos provocados pelo avanço científico. Nesse sentido, o filósofo Hans Jonas, em sua obra O Princípio Responsabilidade, defende que o avanço tecnológico deve ser acompanhado da preocupação com suas consequências futuras. Entretanto, essa ideia nem sempre é colocada em prática, uma vez que o aumento das atividades espaciais também contribui para o acúmulo de lixo espacial, formado por satélites desativados e fragmentos de equipamentos que permanecem em órbita. Dessa forma, a falta de medidas adequadas para controlar esses resíduos pode colocar em risco outras operações espaciais e comprometer o desenvolvimento de novas pesquisas.

Além disso, a desigualdade no acesso aos benefícios da exploração espacial representa outro desafio para a responsabilidade social. Isso ocorre porque os investimentos nesse setor são elevados e, muitas vezes, os avanços científicos ficam concentrados em países e empresas com maior poder econômico. Enquanto isso, diversas regiões do mundo ainda enfrentam problemas básicos relacionados à saúde, à educação e à falta de recursos. Assim, embora a exploração espacial contribua para o desenvolvimento de novas tecnologias e conhecimentos, é necessário garantir que seus benefícios também possam alcançar a sociedade de maneira mais ampla.

Portanto, cabe ao Poder Público, em parceria com agências espaciais e instituições científicas, fortalecer a fiscalização das atividades espaciais, por meio da criação de normas para o descarte de equipamentos e do monitoramento dos resíduos presentes na órbita terrestre. Além disso, os governos devem incentivar pesquisas científicas e tecnologias que possam trazer benefícios à população, ampliando o acesso às descobertas do setor. Essas medidas têm como finalidade reduzir os impactos ambientais e garantir que o desenvolvimento espacial seja realizado de maneira responsável. Dessa maneira, será possível conciliar o avanço científico com as necessidades sociais e a preservação do meio ambiente.`
  },
  {
    number: 12,
    title: "Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira",
    preview: "Na animação “Rio”, de 2011, é retratada a realidade de aves ameaçadas pelo tráfico de animais silvestres...",
    text: `Na animação “Rio”, de 2011, é retratada a realidade de aves ameaçadas pelo tráfico de animais silvestres, evidenciando os perigos enfrentados pela fauna. Trazendo para fora da ficção, a conservação das espécies brasileiras também representa um desafio, devido à destruição dos habitats naturais e à insuficiência de medidas de proteção ambiental. Dessa forma, torna-se necessário analisar os fatores que contribuem para a extinção de animais e comprometem o equilíbrio ecológico.

Além disso, a ação humana representa um obstáculo à conservação da fauna brasileira. Nesse contexto, a canção “Passaredo”, de Chico Buarque e Francis Hime, aborda diferentes espécies de aves e permite refletir sobre a relação entre os seres humanos e a natureza. Fora do campo artístico, a caça ilegal e o tráfico de animais silvestres evidenciam a exploração da fauna, ameaçando a sobrevivência de diversas espécies. Dessa maneira, a falta de conscientização e de fiscalização efetiva contribui para a perda da biodiversidade e para o desequilíbrio ecológico.

Soma-se a esse cenário, a destruição dos habitats naturais constitui um dos principais obstáculos à conservação da fauna brasileira. De acordo com dados divulgados pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio), o país reconhece 1.279 espécies animais ameaçadas de extinção. Esse cenário está relacionado ao desmatamento, às queimadas e à expansão das atividades humanas sobre áreas naturais, que reduzem os espaços de alimentação e reprodução dos animais. Consequentemente, a biodiversidade é prejudicada e o equilíbrio dos ecossistemas fica comprometido.

Em última análise, o Ministério do Meio Ambiente pode criar o programa “Guardiões da Fauna”, uma plataforma digital que permite à população denunciar crimes ambientais por meio de fotos e localização, com garantia de anonimato. As denúncias poderiam ser analisadas por equipes especializadas e encaminhadas rapidamente aos órgãos responsáveis. Em paralelo, as escolas devem promover campanhas de educação ambiental, com visitas a parques, oficinas de identificação de espécies e projetos de adoção simbólica de animais ameaçados. Dessa maneira, a fiscalização será fortalecida, a sociedade participará ativamente da proteção da biodiversidade e será possível reduzir as ameaças à fauna brasileira, garantindo o equilíbrio ecológico para as futuras gerações.`
  },
  {
    number: 13,
    title: "Migração e acolhimento: desafios da convivência em contextos globais",
    preview: "A Declaração Universal dos Direitos Humanos, criada em 1948, estabelece que todos os indivíduos devem ter seus direitos respeitados...",
    text: `A Declaração Universal dos Direitos Humanos, criada em 1948, estabelece que todos os indivíduos devem ter seus direitos respeitados, independentemente de sua origem. Entretanto, na sociedade atual, essa garantia ainda não acontece de maneira efetiva, principalmente quando se trata de pessoas que deixam seus países em busca de melhores condições de vida. Nesse sentido, a dificuldade de integração dos imigrantes e o preconceito enfrentado por eles representam obstáculos para uma convivência mais justa e respeitosa.

Em primeiro lugar, é importante destacar que a falta de oportunidades dificulta o acolhimento dos imigrantes. Isso ocorre porque muitos chegam ao Brasil sem conhecer o idioma, a cultura e o funcionamento dos serviços públicos, o que prejudica sua entrada no mercado de trabalho e o acesso à educação. Sob essa perspectiva, o filme O Terminal retrata a situação de um homem que fica preso em um aeroporto devido a problemas relacionados à sua documentação, demonstrando as dificuldades enfrentadas por quem vive longe de seu país de origem. Dessa forma, percebe-se que a ausência de suporte adequado pode tornar ainda mais complicada a adaptação dessas pessoas.

Além disso, o preconceito também é um fator que impede a construção de uma sociedade mais acolhedora. Nesse contexto, a xenofobia, caracterizada pela rejeição a pessoas de outras nacionalidades, contribui para situações de exclusão e desrespeito. Como consequência, muitos imigrantes enfrentam dificuldades para construir relações sociais e se sentirem parte da sociedade em que vivem. Assim, enquanto a população não compreender a importância de respeitar as diferenças culturais, a integração entre os povos continuará sendo um desafio.

Portanto, é necessário que o Governo Federal, em parceria com o Ministério dos Direitos Humanos e da Cidadania, desenvolva projetos de acolhimento aos imigrantes, por meio da ampliação de cursos gratuitos de português, orientação profissional e assistência social. Além disso, as escolas devem promover campanhas educativas sobre diversidade cultural e combate à xenofobia, com palestras e atividades de conscientização. Dessa maneira, será possível diminuir a discriminação, facilitar a adaptação dos estrangeiros e construir uma sociedade mais respeitosa e inclusiva.`
  },
  {
    number: 14,
    title: "El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos",
    preview: "A animação O Lorax: Em Busca da Trúfula Perdida retrata os impactos da exploração descontrolada da natureza...",
    text: `A animação O Lorax: Em Busca da Trúfula Perdida retrata os impactos da exploração descontrolada da natureza e evidencia os riscos causados pelo desequilíbrio ambiental. Fora das telas, essa problemática está presente na sociedade brasileira, que enfrenta eventos climáticos extremos, como enchentes, secas e ondas de calor, intensificados por fatores ambientais. Nesse contexto, o fenômeno El Niño e as mudanças climáticas representam desafios para a preparação da população, principalmente devido à falta de planejamento governamental e à insuficiente conscientização social.

Em primeiro lugar, a ausência de infraestrutura adequada dificulta a prevenção de desastres naturais. Segundo a Organização Meteorológica Mundial (OMM), o El Niño é um fenômeno climático natural caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial, capaz de alterar os padrões de chuva e temperatura em diversas regiões. No Brasil, seus efeitos podem contribuir para períodos de seca em determinadas áreas e chuvas intensas em outras. Entretanto, a falta de sistemas eficientes de drenagem, monitoramento e alerta aumenta a vulnerabilidade da população, especialmente em comunidades localizadas em áreas de risco.

Além disso, a falta de educação ambiental prejudica a preparação da sociedade diante dessas situações. Nesse sentido, o filósofo Hans Jonas, em sua obra O Princípio Responsabilidade, defende que as ações humanas devem considerar suas consequências para as futuras gerações. Sob essa perspectiva, a ausência de conscientização sobre as mudanças climáticas favorece práticas prejudiciais ao meio ambiente e dificulta a adoção de medidas preventivas. Dessa forma, quando a população não recebe informações adequadas sobre os riscos climáticos, torna-se mais difícil agir de maneira responsável e proteger vidas durante situações de emergência.

Portanto, é necessário ampliar a preparação da sociedade brasileira diante dos eventos climáticos extremos. Para isso, o Governo Federal, por meio do Ministério das Cidades e em parceria com as Defesas Civis, deve investir em sistemas de alerta, obras de drenagem e monitoramento de áreas vulneráveis, a fim de reduzir os danos provocados por enchentes e deslizamentos. Ademais, o Ministério da Educação deve promover campanhas e atividades de educação ambiental nas escolas, ensinando os estudantes a reconhecer riscos e adotar medidas preventivas. Assim, será possível construir uma sociedade mais consciente, resiliente e preparada para enfrentar os efeitos do El Niño e das mudanças climáticas.`
  },
  {
    number: 17,
    title: "Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil",
    preview: "Na obra cinematográfica Wall-E, da Pixar, retrata-se um futuro distópico no qual a Terra se torna praticamente inabitável...",
    text: `Na obra cinematográfica Wall-E, da Pixar, retrata-se um futuro distópico no qual a Terra se torna praticamente inabitável em decorrência do acúmulo excessivo de lixo e da negligência humana com o meio ambiente. Fora da ficção, essa problemática aproxima-se da realidade brasileira, sobretudo diante da obsolescência tecnológica e do descarte inadequado de resíduos eletrônicos. Nesse contexto, a cultura do consumo exacerbado e a insuficiência de políticas públicas efetivas constituem obstáculos à sustentabilidade nacional.

Em primeiro plano, destaca-se a influência da sociedade de consumo, conceito aprofundado pelo sociólogo Zygmunt Bauman, em sua obra Vida para Consumo. Segundo o autor, as relações contemporâneas são marcadas pela valorização do novo e pelo descarte do que se torna ultrapassado. Sob essa perspectiva, a substituição frequente de celulares, computadores e outros aparelhos, muitas vezes estimulada pela obsolescência programada, intensifica a produção de lixo eletrônico e agrava a exploração dos recursos naturais.

Ademais, a deficiência na fiscalização e na infraestrutura de coleta desses materiais potencializa o problema. Embora a Política Nacional de Resíduos Sólidos, instituída pela Lei nº 12.305/2010, estabeleça a responsabilidade compartilhada pelo ciclo de vida dos produtos, sua aplicação ainda enfrenta dificuldades. Consequentemente, substâncias tóxicas presentes nos equipamentos podem contaminar o solo e a água, comprometendo os ecossistemas e a saúde coletiva.

Portanto, cabe ao Governo Federal, por meio do Ministério do Meio Ambiente, ampliar os pontos de coleta de resíduos eletrônicos e fiscalizar o cumprimento da logística reversa, mediante parcerias com empresas fabricantes e campanhas educativas nas escolas. Além disso, as indústrias devem incentivar o reparo e a reutilização dos aparelhos. Assim, será possível reduzir os impactos ambientais e impedir que o cenário apresentado em Wall-E se concretize no Brasil.`
  },
  {
    number: 1,
    title: "O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea",
    preview: "O respeito às diferenças é fundamental para a construção de uma sociedade mais justa e igualitária...",
    text: `O respeito às diferenças é fundamental para a construção de uma sociedade mais justa e igualitária, visto que a ausência desse princípio pode gerar conflitos, como desentendimentos e atos discriminatórios, motivados pela intolerância diante das divergências sociais e culturais. Nesse sentido, torna-se necessário compreender a importância da valorização da diversidade para a promoção de uma convivência harmoniosa.

Em primeiro lugar, é importante destacar que o respeito representa um instrumento essencial para a superação de conflitos sociais. Isso porque reconhecer e respeitar questões relacionadas ao gênero, à raça, à etnia, à religião, à sexualidade e às diferentes opiniões permite compreender que cada indivíduo possui características e perspectivas próprias. Dessa forma, quando as diferenças são reconhecidas como parte da diversidade humana, deixam de ser vistas como motivos de rivalidade e passam a contribuir para a construção de uma sociedade mais consciente e inclusiva. Assim, o reconhecimento da diversidade torna-se indispensável para reduzir atitudes intolerantes e fortalecer o respeito entre os indivíduos.

Além disso, superar conflitos vai muito além de simplesmente tolerar o próximo. É necessário estabelecer o diálogo, praticar a empatia e compreender diferentes pontos de vista, sem julgamentos ou preconceitos. Entretanto, a ausência de uma educação voltada à valorização da diversidade contribui para a perpetuação de atitudes discriminatórias. Assim, a escola desempenha um papel fundamental na formação de cidadãos conscientes, capazes de conviver respeitosamente com as diferenças, uma vez que o ambiente escolar permite o contato com diferentes realidades e formas de pensar.

Portanto, é imprescindível que o Ministério da Educação, em parceria com as instituições de ensino, promova campanhas educativas e palestras sobre o respeito à diversidade, por meio de debates, atividades interativas e projetos escolares que envolvam alunos, professores e familiares. Ademais, o poder público deve fortalecer políticas de inclusão e combate à discriminação, a fim de conscientizar a população e garantir uma convivência social mais respeitosa. Dessa maneira, será possível construir uma sociedade na qual as diferenças sejam valorizadas e os conflitos sejam superados por meio do diálogo e da empatia.`
  },
  {
    number: 2,
    title: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",
    preview: "No filme Interestelar, é apresentado um futuro em que crises ambientais e agrícolas ameaçam a sobrevivência humana...",
    text: `No filme Interestelar, é apresentado um futuro em que crises ambientais e agrícolas ameaçam a sobrevivência humana, reforçando a importância de preservar os recursos naturais. Fora da ficção, essa problemática também ocorre no setor agropecuário brasileiro, que enfrenta o desafio de equilibrar a alta produtividade com a preservação ambiental. Nesse contexto, torna-se necessário discutir os impactos da exploração excessiva dos recursos naturais e a importância de práticas sustentáveis no agronegócio.

Em primeiro lugar, a expansão descontrolada da produção agrícola contribui significativamente para o desmatamento e para a degradação ambiental. Muitas áreas naturais são destruídas para dar lugar a pastagens e plantações, comprometendo a biodiversidade e agravando as mudanças climáticas. Nesse contexto, a Organização das Nações Unidas estabeleceu os Objetivos de Desenvolvimento Sustentável, que incluem metas relacionadas à produção responsável e à preservação ambiental. Essas medidas demonstram a importância de conciliar o crescimento econômico com a conservação da natureza, evitando que a busca por maior produtividade cause danos ao meio ambiente.

Outro aspecto importante é a dificuldade de implementar práticas sustentáveis no setor agropecuário. Muitos produtores ainda enfrentam obstáculos para adotar métodos que reduzam os impactos ambientais, seja pela falta de recursos financeiros ou pela dificuldade de acesso a novas tecnologias. Com isso, a produção agrícola pode continuar dependendo de práticas prejudiciais à natureza, aumentando os problemas relacionados ao desmatamento e ao uso excessivo dos recursos naturais.

Portanto, é fundamental que o governo federal, em parceria com a Embrapa, incentive práticas agrícolas sustentáveis por meio de investimentos em tecnologia e fiscalização. Além disso, campanhas educativas devem conscientizar os produtores sobre a importância da preservação dos recursos naturais. Também é necessário ampliar o acesso a técnicas de produção menos prejudiciais ao meio ambiente, a fim de reduzir os impactos das atividades agropecuárias. Dessa maneira, será possível fortalecer o agronegócio brasileiro sem comprometer a natureza.`
  },
  {
    number: 3,
    title: "Reconhecimento da contribuição das mulheres nas Ciências da Saúde no Brasil",
    preview: "A Constituição Federal de 1988 assegura a igualdade de direitos entre homens e mulheres...",
    text: `A Constituição Federal de 1988 assegura a igualdade de direitos entre homens e mulheres. Entretanto, apesar dos avanços sociais conquistados ao longo dos anos, ainda existem obstáculos para o reconhecimento da contribuição feminina nas Ciências da Saúde no Brasil. Nesse contexto, a invisibilidade histórica das mulheres e a persistência do machismo na sociedade constituem fatores que dificultam a valorização dessas profissionais.

Em primeira análise, destaca-se a importância da atuação feminina para o desenvolvimento da saúde pública brasileira. Um exemplo disso é a trajetória da médica pediatra Zilda Arns, fundadora da Pastoral da Criança, em 1983. Por meio de ações comunitárias de orientação sobre higiene, alimentação saudável e cuidados infantis, a médica contribuiu significativamente para o combate à mortalidade infantil no país. Sua iniciativa demonstra que a participação das mulheres é indispensável para a promoção da saúde e para a transformação da realidade social. Entretanto, embora existam mulheres com contribuições fundamentais para a ciência, muitas ainda não recebem o devido reconhecimento, evidenciando a permanência de uma desigualdade histórica.

Além disso, o machismo estrutural contribui diretamente para a desvalorização feminina no campo científico. Historicamente, a sociedade atribuiu aos homens maior capacidade intelectual e protagonismo profissional, enquanto as conquistas das mulheres foram frequentemente ignoradas ou até mesmo atribuídas a terceiros. Como consequência, pesquisadoras, médicas e cientistas enfrentam dificuldades para conquistar visibilidade e ocupar posições de liderança. Dessa forma, a falta de representatividade feminina contribui para a manutenção de estereótipos de gênero, dificultando a construção de uma sociedade verdadeiramente igualitária.

Portanto, é necessário combater a invisibilidade das mulheres nas Ciências da Saúde brasileiras. Para isso, o Ministério da Educação, em parceria com o Ministério da Saúde, deve promover campanhas de valorização das cientistas e profissionais da área, por meio da inclusão de suas trajetórias nos materiais didáticos, da realização de palestras nas escolas e da divulgação de suas contribuições nos meios de comunicação. Essa medida tem como finalidade ampliar o conhecimento da população sobre o protagonismo feminino, combater o preconceito de gênero e incentivar novas gerações de mulheres a ingressarem na ciência. Assim, será possível construir uma sociedade mais justa, na qual as contribuições femininas sejam reconhecidas e valorizadas.`
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Botões da capa
  document.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-go');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Fotos
  const photoOverlay = document.getElementById('photoOverlay');
  document.querySelectorAll('[data-photo]').forEach(el => {
    const open = () => {
      const id = +el.dataset.photo;
      const p = photos.find(x => x.id === id);
      if (!p) return;
      document.getElementById('photoTitle').textContent = p.title;
      document.getElementById('photoDesc').textContent = p.description;
      openOverlay(photoOverlay);
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  // Escolas
  const schoolOverlay = document.getElementById('schoolOverlay');
  document.querySelectorAll('[data-school]').forEach(el => {
    const open = () => {
      const idx = +el.dataset.school;
      const s = schools[idx];
      if (!s) return;
      document.getElementById('schTag').textContent = s.tag;
      document.getElementById('schName').textContent = s.name;
      document.getElementById('schPeriod').textContent = s.period;
      document.getElementById('schStory').textContent = s.story;
      document.getElementById('schLearn').textContent = s.learn;
      const ul = document.getElementById('schMoments');
      ul.innerHTML = '';
      s.moments.forEach(m => {
        const li = document.createElement('li');
        li.textContent = m;
        ul.appendChild(li);
      });
      openOverlay(schoolOverlay);
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  // Redações
  let curEssay = 0;
  const grid = document.getElementById('essaysGrid');
  const essayOverlay = document.getElementById('essayOverlay');

  essays.forEach((e, i) => {
    const card = document.createElement('article');
    card.className = 'essay-item';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.innerHTML = `
      <span class="essay-n">Redação ${String(e.number).padStart(2, '0')}</span>
      <h3>${e.title}</h3>
      <p class="essay-prev">${e.preview}</p>
      <span class="essay-open">Abrir redação</span>
    `;
    const open = () => showEssay(i);
    card.addEventListener('click', open);
    card.addEventListener('keydown', ev => {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(); }
    });
    grid.appendChild(card);
  });

  function showEssay(i) {
    curEssay = i;
    const e = essays[i];
    document.getElementById('essayNum').textContent = `Redação ${String(e.number).padStart(2, '0')}`;
    document.getElementById('essayTitle').textContent = e.title;
    const body = document.getElementById('essayBody');
    body.innerHTML = e.text.trim().split(/\n\n+/).map(p => `<p>${p.trim()}</p>`).join('');
    document.getElementById('essayCur').textContent = i + 1;
    document.getElementById('essayPrev').disabled = i === 0;
    document.getElementById('essayNext').disabled = i === essays.length - 1;
    openOverlay(essayOverlay);
  }

  document.getElementById('essayPrev')?.addEventListener('click', () => {
    if (curEssay > 0) showEssay(curEssay - 1);
  });
  document.getElementById('essayNext')?.addEventListener('click', () => {
    if (curEssay < essays.length - 1) showEssay(curEssay + 1);
  });

  // Surpresas
  const surpriseOverlay = document.getElementById('surpriseOverlay');
  document.querySelectorAll('[data-s]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.s;
      const data = surprises[key];
      if (!data) return;
      document.getElementById('surpriseMsg').innerHTML = data.html;
      openOverlay(surpriseOverlay);
    });
  });

  // Conclusão
  document.getElementById('revealFinal')?.addEventListener('click', () => {
    const letter = document.getElementById('finalLetter');
    letter.hidden = false;
    document.getElementById('revealFinal').style.display = 'none';
    setTimeout(() => letter.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
  });

  // Fechar overlays
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.overlay').forEach(o => closeOverlay(o));
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.overlay:not([hidden])').forEach(o => closeOverlay(o));
    }
  });

  function openOverlay(el) {
    if (!el) return;
    el.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay(el) {
    if (!el) return;
    el.hidden = true;
    document.body.style.overflow = '';
  }
});
