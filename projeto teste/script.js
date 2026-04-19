// PRE-CARREGAR IMAGENS (EVITA PISCAR)
const imagensPaths = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png"
];

let imagensCarregadas = 0;

imagensPaths.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    imagensCarregadas++;

    if (imagensCarregadas === imagensPaths.length) {
      iniciarSlider();
    }
  };
});

function iniciarSlider() {
  const imagens = document.querySelectorAll(".slider img");
  let index = 0;

  setInterval(() => {
    imagens[index].classList.remove("active");

    index = (index + 1) % imagens.length;

    imagens[index].classList.add("active");
  }, 4000);
}

// ================= LOGIN / CADASTRO =================

function cadastrar() {
  const nome = document.getElementById("nome")?.value;
  const email = document.getElementById("novoEmail").value;
  const senha = document.getElementById("novaSenha").value;
  const confirmar = document.getElementById("confirmarSenha").value;

  const erro = document.getElementById("erro-cadastro");

  if (email === "" || senha === "" || nome === "") {
    erro.style.color = "#e74c3c";
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  if (senha !== confirmar) {
    erro.style.color = "#e74c3c";
    erro.textContent = "As senhas não coincidem.";
    return;
  }

  localStorage.setItem("usuario", email);
  localStorage.setItem("senha", senha);
  localStorage.setItem("nome", nome);

  erro.style.color = "green";
  erro.textContent = "Conta criada com sucesso!";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarioSalvo = localStorage.getItem("usuario");
  const senhaSalva = localStorage.getItem("senha");

  const erro = document.getElementById("erro-login");

  if (email === usuarioSalvo && senha === senhaSalva) {
    localStorage.setItem("logado", "true");
    window.location.href = "index.html";
  } else {
    erro.style.color = "#e74c3c";
    erro.textContent = "Email ou senha incorretos.";
  }
}