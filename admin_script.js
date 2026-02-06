
// 2. Dados da Trilha (Extraídos do seu documento)
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
            { titulo: "Explorador Consciente", desc: "Explica o que é um sistema operacional e sua função." }, // [cite: 27, 28]
            { titulo: "Caçador de Bugs - I", desc: "Resolve problemas básicos e usa o gerenciador de tarefas." } // [cite: 30, 31, 32]
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
// Função para p
async function inicializarAdmin() {
    const selectAluno = document.getElementById('admin-select-aluno');
    const selectModulo = document.getElementById('admin-select-modulo');

    selectAluno.innerHTML = '<option value="">Carregando alunos...</option>';
    selectModulo.disabled = true;

    const { data: alunos, error } = await supabaseClient
        .from('alunos')
        .select('id, nome')
        .order('nome');

    selectAluno.innerHTML = '<option value="">Escolha um aluno...</option>';

    if (error) {
        console.error("Erro ao carregar alunos:", error.message);
        return;
    }

    alunos.forEach(aluno => {
        const opt = document.createElement('option');
        opt.value = aluno.id;
        opt.textContent = aluno.nome;
        selectAluno.appendChild(opt);
    });

    // Quando escolher um aluno, libera o módulo e renderiza
    selectAluno.onchange = () => {
        selectModulo.disabled = false;
        renderizarChecklist();
    };
}


async function renderizarChecklist() {
    const alunoId = document.getElementById('admin-select-aluno').value;
    const moduloId = document.getElementById('admin-select-modulo').value;
    const container = document.getElementById('checklist-container');

    container.innerHTML = "";

    // Validação forte (impede renderização prematura)
    if (!alunoId || !moduloId || !trilhaEducacional[moduloId]) {
        container.innerHTML = "<p style='padding:20px;'>Selecione um aluno e um módulo.</p>";
        return;
    }

    console.log("Renderizando checklist:", alunoId, moduloId);

    const { data: progresso, error } = await supabaseClient
        .from('progresso_figurinhas')
        .select('figurinha_slug')
        .eq('aluno_id', alunoId)
        .eq('modulo_id', moduloId);

    if (error) {
        console.error("Erro ao buscar progresso:", error.message);
    }

    container.innerHTML = `<h2 style="margin:20px 0;">Atribuir Figurinhas – Módulo ${moduloId}</h2>`;

    ["bronze", "prata", "ouro"].forEach(nivel => {
        const section = document.createElement('div');
        section.className = `admin-nivel-section ${nivel}`;
        section.innerHTML = `<h3 style="margin-top:20px;">Nível ${nivel}</h3>`;

        trilhaEducacional[moduloId][nivel].forEach((fig, index) => {
            const slug = `mod${moduloId}_${nivel}_${index + 1}`;
            const marcado = progresso?.some(p => p.figurinha_slug === slug);

            const item = document.createElement('div');
            item.style.padding = "10px";
            item.innerHTML = `
                <input type="checkbox"
                       id="${slug}"
                       ${marcado ? "checked" : ""}
                       onchange="toggleFigurinha('${alunoId}', ${moduloId}, '${nivel}', '${slug}', this.checked)">
                <label for="${slug}">
                    <strong>${fig.titulo}</strong> — ${fig.desc}
                </label>
            `;
            section.appendChild(item);
        });

        container.appendChild(section);
    });
}

// Garante que ambas as chamadas do HTML funcionem
const carregarProgressoAdmin = renderizarChecklist;


async function toggleFigurinha(alunoId, moduloId, nivel, slug, status) {
    if (!alunoId || !moduloId) return;

    if (status) {
        await supabaseClient.from('progresso_figurinhas').upsert({
            aluno_id: alunoId,
            modulo_id: moduloId,
            nivel,
            figurinha_slug: slug
        });
    } else {
        await supabaseClient
            .from('progresso_figurinhas')
            .delete()
            .match({ aluno_id: alunoId, figurinha_slug: slug });
    }
}

async function logout() {
    await supabase.auth.signOut();
    window.location.href = "index.html";
}

window.onload = inicializarAdmin;