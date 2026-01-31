const trilhaEducacional = {
    1: { // Módulo 1 [cite: 2]
        bronze: [
            { titulo: "Domínio do Mouse", desc: "Utiliza corretamente clique simples, duplo, botão direito e rolagem do mouse." }, // [cite: 3, 4]
            { titulo: "Explorador Iniciante", desc: "Abre o explorador de arquivos e navega entre pastas." }, // [cite: 6, 7]
            { titulo: "Criador de Pastas", desc: "Cria, renomeia e organiza pastas no sistema." }, // [cite: 9, 10]
            { titulo: "Lixeira", desc: "Consegue excluir arquivos e entende a diferença entre exclusão definitiva e lixeira." }, // [cite: 12, 13]
            { titulo: "Organização", desc: "Mantém a própria pasta organizada com arquivos nomeados de forma clara." } // [cite: 15, 16]
        ],
        prata: [
            { titulo: "Gerente de Dados", desc: "Move arquivos usando copiar, colar e recortar, e manipula textos." }, // [cite: 18, 19]
            { titulo: "Usuário do Teclado", desc: "Utiliza letras, números, símbolos e teclas especiais com segurança." }, // [cite: 21, 22]
            { titulo: "Configurações", desc: "Ajusta configurações básicas e reconhece propriedades de arquivos." } // [cite: 24, 25]
        ],
        ouro: [
            { titulo: "Usuário Consciente", desc: "Explica o que é um sistema operacional e sua função." }, // [cite: 27, 28]
            { titulo: "Solução de Problemas", desc: "Resolve problemas básicos e usa o gerenciador de tarefas." } // [cite: 30, 31, 32]
        ]
    },
    2: { // Módulo 2 [cite: 34]
        bronze: [
            { titulo: "Digitador Funcional", desc: "Cria e salva documentos de texto simples." }, // [cite: 35, 36]
            { titulo: "Formatação Básica", desc: "Aplica formatações simples ao texto e sabe alinhar." }, // [cite: 38, 39]
            { titulo: "Quebra de Linhas", desc: "Utiliza corretamente a quebra de linhas e parágrafos." }, // [cite: 41, 42]
            { titulo: "Imagens", desc: "Alinha e organiza parágrafos com imagens e formas." }, // [cite: 44, 45]
            { titulo: "Salvamento", desc: "Salva documentos entendendo nome, local e formato." } // [cite: 47, 48]
        ],
        prata: [
            { titulo: "Editor de Tabelas", desc: "Cria tabelas, mescla células e formata individualmente." }, // [cite: 50, 51]
            { titulo: "Documento Estruturado", desc: "Cria títulos e subtítulos com sumário automático." }, // [cite: 53, 54]
            { titulo: "Layout", desc: "Sabe alterar margens, orientação e colunas." } // [cite: 56, 57]
        ],
        ouro: [
            { titulo: "Doc. Profissional", desc: "Cria documento com cabeçalho, rodapé e numeração." }, // [cite: 59, 60]
            { titulo: "Consciência", desc: "Diferencia texto simples de texto formatado." } // [cite: 62, 63]
        ]
    },
    3: { // Módulo 3 [cite: 65]
        bronze: [
            { titulo: "Criador de Slides", desc: "Cria apresentações com vários slides." }, // [cite: 66, 67]
            { titulo: "Texto em Slides", desc: "Insere e edita textos nos slides." }, // [cite: 69, 70]
            { titulo: "Layout Básico", desc: "Seleciona layouts adequados para os slides." }, // [cite: 72, 73]
            { titulo: "Animações", desc: "Insere transições e animações de forma correta." }, // [cite: 75, 76]
            { titulo: "Salvamento", desc: "Salva, abre e opera slides no modo apresentação." } // [cite: 78, 79]
        ],
        prata: [
            { titulo: "Organizador Visual", desc: "Organiza elementos visuais preocupado com a experiência do espectador." }, // [cite: 81, 82]
            { titulo: "Visual Atraente", desc: "Aplica transições adequadas para tornar a apresentação interessante." }, // [cite: 84, 85]
            { titulo: "Apresentador", desc: "Utiliza o modo apresentação corretamente." } // [cite: 87, 88]
        ],
        ouro: [
            { titulo: "Didática", desc: "Cria apresentações claras e objetivas." }, // [cite: 90, 91]
            { titulo: "Comunicação Visual", desc: "Compreende boas práticas e faz apresentações completas." } // [cite: 93, 94]
        ]
    },
    4: { // Módulo 4 [cite: 96]
        bronze: [
            { titulo: "Explorador", desc: "Reconhece células, linhas e colunas." }, // [cite: 97, 98]
            { titulo: "Entrada de Dados", desc: "Insere dados e entende a diferença entre tipos de dados." }, // [cite: 100, 101]
            { titulo: "Formatação", desc: "Aplica formatações simples em planilhas." }, // [cite: 103, 104]
            { titulo: "Salvar Planilha", desc: "Salva e abre arquivos do Excel." }, // [cite: 106, 107]
            { titulo: "Seleção Precisa", desc: "Seleciona células e intervalos corretamente." } // [cite: 109, 110]
        ],
        prata: [
            { titulo: "Operador", desc: "Utiliza fórmulas matemáticas simples." }, // [cite: 112, 113]
            { titulo: "Autopreenchimento", desc: "Utiliza a alça de preenchimento." }, // [cite: 115, 116]
            { titulo: "Organizador", desc: "Organiza dados em formato de tabela." } // [cite: 118, 119]
        ],
        ouro: [
            { titulo: "Raciocínio", desc: "Entende quando usar uma planilha." }, // [cite: 121, 122]
            { titulo: "Resolução", desc: "Resolve situações práticas com fórmulas." } // [cite: 124, 125]
        ]
    },
    5: { // Módulo 5 [cite: 127]
        bronze: [
            { titulo: "Navegador", desc: "Utiliza navegadores para acessar sites." }, // [cite: 128, 129]
            { titulo: "Busca Básica", desc: "Realiza pesquisas simples na internet." }, // [cite: 131, 132]
            { titulo: "Downloads", desc: "Reconhece links e realiza downloads seguros." }, // [cite: 134, 135]
            { titulo: "E-mail Básico", desc: "Envia e recebe e-mails simples." }, // [cite: 137, 138]
            { titulo: "Contas", desc: "Entende o uso de login e senha." } // [cite: 140, 141]
        ],
        prata: [
            { titulo: "Pesquisa Intel.", desc: "Refina buscas usando termos adequados." }, // [cite: 143, 144]
            { titulo: "Segurança", desc: "Reconhece riscos e golpes digitais." }, // [cite: 146, 147]
            { titulo: "Uso de IA", desc: "Utiliza IA para tarefas simples." }, // [cite: 149, 150]
        ],
        ouro: [
            { titulo: "Cidadão Digital", desc: "Compreende privacidade e dados pessoais." }, // [cite: 152, 153]
            { titulo: "Uso Crítico", desc: "Avalia respostas da IA de forma crítica." } // [cite: 155, 156]
        ]
    }
};

function carregarPagina(num) {
    const container = document.getElementById('album-container');
    const modulo = trilhaEducacional[num];
    container.innerHTML = "";

    ["bronze", "prata", "ouro"].forEach(nivel => {
        // Wrapper para alinhar nome do nível + figurinhas
        const wrapper = document.createElement('div');
        wrapper.className = 'nivel-wrapper';

        // Rótulo Lateral
        const label = document.createElement('div');
        label.className = `nivel-label label-${nivel}`;
        label.innerText = nivel;
        wrapper.appendChild(label);

        // Linha de figurinhas
        const row = document.createElement('div');
        row.className = 'nivel-row';
        
        modulo[nivel].forEach(fig => {
            const card = document.createElement('div');
            card.className = `figurinha-card ${nivel}`;
            card.innerHTML = `
                <div style="font-size: 2rem; color: #999;">🎓</div>
                <strong>${fig.titulo}</strong>
                <div class="descricao-overlay">${fig.desc}</div>
            `;
            row.appendChild(card);
        });

        wrapper.appendChild(row);
        container.appendChild(wrapper);
    });
}

// Valores conforme sua regra de negócio
// Valores conforme solicitado
const PONTUACAO_REGRA = {
    'bronze': 8, //
    'prata': 10, //
    'ouro': 15   //
};

function calcularTotalModulo(conquistas) {
    return conquistas.reduce((total, c) => total + (PONTUACAO_REGRA[c.nivel] || 0), 0);
}

// Exemplo de como a figurinha será renderizada
function renderizarFigurinha(fig, nivel, conquistada) {
    const statusClass = conquistada ? "colorida" : "figurinha-vazia";
    return `
        <div class="figurinha-card ${nivel} ${statusClass}">
            <div class="logo-placeholder">${conquistada ? '⭐' : '🎓'}</div>
            <strong>${fig.titulo}</strong>
            <div class="descricao-overlay">${fig.desc}</div>
        </div>
    `;
}

// Configurações de Pontuação baseadas na Trilha [cite: 3, 18, 27]
const PONTOS_POR_NIVEL = {
    'bronze': 8, // Cada figura Bronze vale 8 pontos 
    'prata': 10, // Cada figura Prata vale 10 pontos [cite: 18]
    'ouro': 15   // Cada figura Ouro vale 15 pontos [cite: 27]
};

async function renderizarAlbum(moduloId) {
    const params = new URLSearchParams(window.location.search);
    const alunoId = params.get('id');
    const container = document.getElementById('album-container');
    const placarPontos = document.getElementById('pontos-modulo');

    // 1. Busca progresso do aluno no Supabase
   const { data: conquistas, error } = await supabaseClient
            .from('progresso_figurinhas')
            .select('*')
            .eq('aluno_id', alunoId)
            .eq('modulo_id', moduloId);

        if (error) {
            console.error(error);
            return;
        }


    let totalPontosModulo = 0;
    container.innerHTML = "";

    ["bronze", "prata", "ouro"].forEach(nivel => {
        const wrapper = document.createElement('div');
        wrapper.className = 'nivel-wrapper';
        wrapper.innerHTML = `<div class="nivel-label label-${nivel}">${nivel}</div>`;

        const row = document.createElement('div');
        row.className = 'nivel-row';

        // trilhaEducacional contém as descrições oficiais [cite: 1, 2, 34, 65, 96, 127]
        trilhaEducacional[moduloId][nivel].forEach((fig, index) => {
            const slug = `mod${moduloId}_${nivel}_${index + 1}`;
            const temFigurinha = conquistas.some(c => c.figurinha_slug === slug);
            
            // Define a imagem: a específica ou a logo cinza padrão
           const imagemSrc = temFigurinha
                ? `assets/figurinhas/${slug}.jpeg`
                : `assets/figurinhas/logo_cinza.png`;

            
            if (temFigurinha) totalPontosModulo += PONTOS_POR_NIVEL[nivel];

            const card = document.createElement('div');
            card.className = `figurinha-card ${nivel} ${temFigurinha ? 'conquistada' : 'bloqueada'}`;
           card.innerHTML = `
                    <img src="${imagemSrc}" class="img-figurinha" alt="${fig.titulo}">
                    
                    <button class="btn-ver" onclick="abrirModal('${imagemSrc}', '${fig.desc.replace(/'/g, "\\'")}')">
                        👁️
                    </button>

                    <div class="info-footer">
                        <strong>${fig.titulo}</strong>
                    </div>
                `;

            row.appendChild(card);
        });

        wrapper.appendChild(row);
        container.appendChild(wrapper);
    });

    // Atualiza o placar (Máximo 100 pontos por módulo)
    placarPontos.innerText = totalPontosModulo;
}
// 1. Buscar Alunos para o Select da Index
async function carregarListaAlunos() {
    const { data, error } = await supabaseClient.from('alunos').select('id, nome');
    // Injetar no <select id="select-aluno">
}

function abrirModal(imagem, descricao) {
    document.getElementById('modal-img').src = imagem;
    document.getElementById('modal-desc').innerText = descricao;
    document.getElementById('modal-figurinha').classList.remove('hidden');
}

function fecharModal() {
    document.getElementById('modal-figurinha').classList.add('hidden');
}
const modal = document.getElementById('modal-figurinha');

if (modal) {
    modal.addEventListener('click', e => {
        if (e.target.id === 'modal-figurinha') {
            fecharModal();
        }
    });
}

// 2. Buscar Progresso do Aluno Selecionado
async function buscarProgresso(alunoId) {
    const { data, error } = await supabaseClient
        .from('progresso_figurinhas')
        .select('*')
        .eq('aluno_id', alunoId);
    
    return data; // Retorna lista de figurinhas onde o status é true
}

// 3. Função para Atualizar a Pontuação na Tela
function atualizarPainelPontos(progresso, moduloAtual) {
    const PONTOS_VALOR = { 'bronze': 8, 'prata': 10, 'ouro': 15 };
    
    const total = progresso
        .filter(p => p.modulo_id === moduloAtual && p.conquistada === true)
        .reduce((soma, p) => soma + PONTOS_VALOR[p.nivel], 0);

    document.getElementById('pontos-modulo').innerText = total;
    
    // Feedback visual: se chegar a 100, muda a cor para dourado
    if(total === 100) document.getElementById('pontos-modulo').style.color = 'gold';
}
async function carregarListaAlunos() {
    const select = document.getElementById('select-aluno');
    if (!select) return;

    const { data, error } = await supabaseClient
        .from('alunos')
        .select('id, nome')
        .order('nome', { ascending: true });

    if (error) {
        console.error("Erro ao buscar alunos:", error);
        return;
    }

    data.forEach(aluno => {
        const option = document.createElement('option');
        option.value = aluno.id;
        option.textContent = aluno.nome;
        select.appendChild(option);
    });
}


async function carregarNomeAluno() {
    const params = new URLSearchParams(window.location.search);
    const alunoId = params.get('id');

    if (!alunoId) return;

    const { data, error } = await supabaseClient
        .from('alunos')
        .select('nome')
        .eq('id', alunoId)
        .single();

    if (error) {
        console.error("Erro ao buscar nome do aluno:", error);
        return;
    }

    const spanNome = document.getElementById('nome-aluno');
    if (spanNome) {
        spanNome.innerText = data.nome;
    }
}

function voltarIndex() {
    window.location.href = "index.html";
}

function acessarAlbum() {
    const alunoId = document.getElementById('select-aluno').value;
    if (!alunoId) {
        alert("Por favor, selecione um aluno.");
        return;
    }
    window.location.href = `album.html?id=${alunoId}`;
}

// Iniciar página 1
//carregarPagina(1);
document.addEventListener("DOMContentLoaded", () => {
    carregarNomeAluno();
    renderizarAlbum(1);
});


document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('select-aluno')) {
        carregarListaAlunos();
    }
});

