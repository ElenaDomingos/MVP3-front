# MVP3-front
# Meu Front

Este pequeno projeto foi realizado para o Sprint 3 da Disciplina **Microserviços**
 

A ideia do projeto é a seguinte: O usuário pode cadastrar o próprio serviço, cadastrando o nome dele, email, endereço, digitando o CEP os dados do endereço como rua, bairro, cidade e estado são preenchidos de uma API externa que é essa aqui https://viacep.com.br/ . O usuário termina o cadastro com número da casa, nome do serviço, descrição e contato. No contato ele consegue adicionar numero de whatsapp, link para rede social, conta do instagram, facebook, telegram etc. 

---

## Como executar

Como rodar o Docker. Meu projeto é bem simples e tem apenas html com Tailwind e arquivo de java script. Mas adicionei um arquivo Dockerfile aqui e pode abrir nele com seguinte comando

docker build -t html-server-image:v1 .

docker run -d -p 80:80 html-server-image:v1
