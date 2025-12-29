# <p align="center"> Flights Finder - Desafio Técnico NewCAD </p>

## Contexto
Desafio técnico para vaga de júnior com o objetivo de criar uma Rest API com comunicação com aplicação frontend em React, possuindo os métodos de find all e find by id.

## Como rodar - Backend
- Inicialmente defina as variáveis de ambiente (instrução no .env.example)
- Agora, baixe as dependências com: `npm i`
- Rode os seeders com o comando: `npm run seed`
- Após isso inicie a api com: `npm run dev`
- Por fim, bastá testá-la usando o Postman ou algum software parecido

## Como rodar - Frontend
- Inicialmente defina as variáveis de ambiente (instrução no .env.example)
- Agora, baixe as dependências com: `npm i`
- Após isso inicie a api com: `npm run dev`

## Rotas
- `/flights` - retorna todos os voos
- `/flights/{id}` - retorna o voo com id correspondente