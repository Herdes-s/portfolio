const textoBotaoPrecionado = document.getElementById('texto');
const HTML = "HTML é a sigla para Hypertext Markup Language (Linguagem de Marcação de Hipertexto), que é a linguagem padrão para a criação de páginas da web. Ele estrutura o conteúdo de uma página, usando elementos como títulos, parágrafos, imagens e links, que são definidos através de tags. O HTML não é uma linguagem de programação, mas sim de marcação, que permite aos navegadores interpretar e exibir o conteúdo de forma organizada. "
const CSS = "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência de documentos web escritos em HTML ou XML, controlando como os elementos são exibidos na tela, no papel ou em outros meios. Ele permite separar o conteúdo (HTML) da sua apresentação visual (CSS), o que é fundamental para a criação de sites modernos, controlando aspectos como cores, fontes, layout, espaçamento e animações. "
const javaScript = "JavaScript é uma linguagem de programação de alto nível e multiparadigma, usada para tornar páginas da web interativas e dinâmicas. Criada em 1995 para uso em navegadores, é uma tecnologia fundamental da web, junto com HTML e CSS, e também é usada em servidores (com Node.js) e em aplicativos móveis. Ela permite funcionalidades como manipulação de HTML e CSS, animações, validação de formulários e comunicação com servidores. "
function botaoPrecionado (nome) {
    if (nome === 'HTML') {
        textoBotaoPrecionado.innerText = HTML;
    } else if (nome === 'CSS') {
        textoBotaoPrecionado.innerText = CSS;
    }  else {
        textoBotaoPrecionado.innerText = javaScript;
        }

    
}


