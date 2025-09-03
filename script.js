// A função principal que será chamada quando o formulário for enviado
function sendMail(event) {
    // 1. Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // 2. IDs do seu serviço e template do EmailJS
    const serviceID = "service_uekmv04";
    const templateID = "template_pqlyq9i";

    // 3. ATENÇÃO: Insira sua Chave Pública (Public Key) aqui!
    // Você a encontra no painel do EmailJS em: Account > API Keys
    const publicKey = "VR_pFOxmnOP1nGw7s";

    // 4. Pega os valores digitados nos campos do formulário
    // Os nomes ('nome', 'email') correspondem ao atributo 'name' no seu HTML
    const templateParams = {
        nome: document.querySelector('input[name="nome"]').value,
        email: document.querySelector('input[name="email"]').value,
        assunto: document.querySelector('input[name="assunto"]').value,
        mensagem: document.querySelector('textarea[name="mensagem"]').value,
    };

    // 5. Validação simples: verifica se algum campo está vazio
    if (!templateParams.nome || !templateParams.email || !templateParams.assunto || !templateParams.mensagem) {
        alert("Por favor, preencha todos os campos.");
        return; // Interrompe a função se algum campo estiver vazio
    }

    // 6. Inicializa o EmailJS com sua Chave Pública
    emailjs.init(publicKey);

    // 7. Envia o e-mail usando os IDs e os parâmetros do formulário
    emailjs.send(serviceID, templateID, templateParams)
        .then(
            (response) => {
                // Executado em caso de SUCESSO
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                alert('Obrigado! Sua mensagem foi enviada.');

                // Limpa os campos do formulário após o envio
                document.getElementById('contact-form').reset();
            },
            (error) => {
                // Executado em caso de ERRO
                console.log('ERRO AO ENVIAR O E-MAIL...', error);
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
            }
        );
}

// --- CÓDIGO QUE CONECTA O FORMULÁRIO À FUNÇÃO ---

// Seleciona o formulário na página usando o ID que você definiu no HTML
const contactForm = document.getElementById('contact-form');

// Adiciona um "escutador" que chama a função 'sendMail' quando o formulário é submetido
if (contactForm) {
    contactForm.addEventListener('submit', sendMail);
}