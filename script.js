var projetos = document.querySelectorAll(".project");

projetos.forEach(projeto => {
  projeto.addEventListener("click", () => {

    if (projeto.classList.contains("expandido")) {
      projeto.classList.remove("expandido");
      document.body.style.overflow = "";
      return;
    }

    projetos.forEach(p => p.classList.remove("expandido"));

    projeto.classList.add("expandido");
    document.body.style.overflow = "hidden";
  });
});

var formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido!");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  formulario.reset();
});
