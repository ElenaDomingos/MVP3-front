/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/servicos';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.servicos.forEach(item => insertList(item.id, item.nome_usuario, item.email, item.cep, item.logradouro, item.numero, item.bairro, item.cidade, item.estado, item.nome_servico, item.descricao, item.contato))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()


/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputNomeUsuario, inputEmail, inputCep, inputLogradouro, inputNumero, inputBairro, inputCidade, inputEstado, inputNomeServico, inputDescricao, inputContato) => {
  let formData = new FormData();
  formData.append('nome_usuario', inputNomeUsuario);
  formData.append('email', inputEmail);
  formData.append('cep', inputCep);
  formData.append('logradouro', inputLogradouro);
  formData.append('numero', inputNumero);
  formData.append('bairro', inputBairro);
  formData.append('cidade', inputCidade);
  formData.append('estado', inputEstado);
  formData.append('nome_servico', inputNomeServico);
  formData.append('descricao', inputDescricao);
  formData.append('contato', inputContato);

  var url = 'http://127.0.0.1:5000/servico';
  fetch(url, {
    method: 'post',
    body: formData,
  }).then((response) => response.json()).catch((error) => {
      //console.error('Error:', error);
      alert(error);
    });
}

 


 
const newItem = () => {
  let inputNomeUsuario = document.getElementById("nome").value;
  let inputEmail = document.getElementById("email").value;
  let inputCep = document.getElementById("cep").value;
  let inputNumero = document.getElementById("numero").value;
  let inputBairro = document.getElementById("bairro").value;
  let inputLogradouro = document.getElementById("logradouro").value;
  let inputCidade = document.getElementById("cidade").value;
  let inputEstado = document.getElementById("estado").value;
  let inputNomeServico = document.getElementById("servico").value;
  let inputDescricao = document.getElementById("descricao").value;
  let inputContato= document.getElementById("contato").value;
  
   
  if (inputNomeUsuario === '') {
    alert("Escreva o seu nome!"); 
  } else { 
    if(postItem(inputNomeUsuario, inputEmail, inputCep, inputLogradouro, inputNumero, inputBairro, inputCidade, inputEstado, inputNomeServico, inputDescricao, inputContato)){
      alert('Está tudo certo');
    }else{
      alert('Ocorreu um erro');
    }
    
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (id, NomeUsuario, email, cep, logradouro, numero, bairro, cidade, estado, nomeServico, descricao, contato) => {
  var item = [id, NomeUsuario, email, cep, logradouro, numero, bairro, cidade, estado, nomeServico, descricao, contato]
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1))   
} 