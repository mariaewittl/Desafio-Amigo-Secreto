# Desafio Amigo Secreto

## Índice

[Descrição do Projeto](#descrição-do-projeto)

[Status do Projeto](#status-do-projeto)

[Funcionalidades](#funcionalidades)

[Tecnologias utilizadas](#tecnologias-utilizadas)

[Conclusão](#conclusão)

## 📑 Descrição do Projeto

  O prejeto trata-se da execução do desafio proposto no curso "Praticando Logica de programação: Challenge amigo secreto", que é parte da formação "Iniciante em Programação" do programa ONE, uma parceria Oracle e Alura.
  
  O principal objetivo do desafio foi o desenvolvimento do código JavaScript para dar funcionalidade à página proposta, que deveria permitir aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".
  
  Os arquivos HTML, CSS e pasta de assets foram disponibilizados pré-prontos, porém sofreram algumas alterações ao longo do desenvolvimento para adequarem-se às novas necessidades que surgiram a partir da programação em JavaScript.

## ☑️ Status do Projeto

  O projeto está concluído dentro das propostas do desafio, porém sempre há espaço para aprimoramento e atualizações conforme a necessidade.

## 🖱️ Funcionalidades
### Inserir nomes

![interface inicial](https://github.com/user-attachments/assets/efc3a26d-e611-4f30-bc01-ec56048bb4df)

  No campo de texto "Digite um nome" o usuário pode informar os nomes que deseja adicionar, inserindo *um por vez* e em seguida clicando no botão "Adicionar". Também é possível utilizar a **tecla enter** para adicionar o nome.

  ![inserir nome](https://github.com/user-attachments/assets/0abc47b8-4b77-4c86-9ab6-cd3a4856e089)

  Caso o campo seja deixado **em branco** e o botão "adicionar" ou a tecla enter sejam clicados, uma mensagem aparecerá abaixo da barra informando que o nome é inválido.

![campo em branco](https://github.com/user-attachments/assets/adae4bb8-11e7-47f9-b9cf-f3eb95f95c7b)

  A mesma mensagem irá aparecer se **números ou símbolos especiais** (@, #, etc.) forem inseridos no campo.

![nome com números](https://github.com/user-attachments/assets/5d647235-dada-4ae6-8a64-f9b495fb4375)
  
![nome com símbolos](https://github.com/user-attachments/assets/994e72d4-2020-4335-8361-d54acb796ad8)

Caso o *nome inserido já esteja na lista*, aparecerá a mensagem "**Este amigo já foi adicionado**" abaixo da barra, informando a repetição.

![nome repetido](https://github.com/user-attachments/assets/fe3eb5d9-e1c9-41de-a827-f76dac2b9b1c)

### Mostrar lista de nomes

Após o usuário inserir o nome e clicar em adicionar, o nome informado aparecerá em destaque abaixo da barra, onde ficará visível até ser sorteado.

![nomes na lista](https://github.com/user-attachments/assets/754d96b3-9d3f-4a9c-b0b6-d7b26370d139)


### Sortear

Após o usuário inserir todos os nomes que deseja, basta clicar no botão "Sortear amigo" para iniciar o sorteio.

![nomes na lista](https://github.com/user-attachments/assets/447d6929-41dd-41c7-ac62-975f2649f4a3)

Caso *nenhum nome* tenha sido informado, o **sorteio não será iniciado**.

O sorteio só será realizado se *mais de um nome tiver sido informado*. Caso apenas **um** nome tenha sido inserido, aparecerá acima do botão "Sortear amigo" a mensagem "Adicione amigos para sortear". 

![msg add amigos](https://github.com/user-attachments/assets/782d1eba-894f-4155-856b-8d580ded2697)

Se ao menos dois nomes tiverem sido inseridos, é possível iniciar o sorteio. A cada nome sorteado aparecerá na tela a mensagem "O amigo sorteado foi:", seguida pelo nome sorteado, que será automaticamente removido da lista.

![amigo sorteado](https://github.com/user-attachments/assets/06a5cfe0-b829-4604-bdb4-10258f1edf34)

### Novo sorteio

A qualquer momento é possível iniciar um novo sorteio do zero clicando em "Novo sorteio" logo abaixo do botão "Sortear amigo". Após clicar para iniciar novamente, aparecerá a mensagem "Insira novos nomes". A mensagem desaparecerá assim que novos nomes forem informados.

![novo sorteio](https://github.com/user-attachments/assets/96474391-3108-4fcf-9fbf-fb307110f1dd)

## 👩‍💻 Tecnologias utilizadas

* HTML
* CSS
* JavaScript

## 🏁 Conclusão

O desafio foi uma ótima oportunidade de colocar em prática os conteúdos trabalhados na formação Iniciante em Programação e aprofundar os conhecimentos. Apesar de simples, é apenas o primeiro passo em direção a projetos mais complexos.
