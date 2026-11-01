# pipeline_cicd_pos

Aplicação simples feita para demonstrar um pipeline de **CI/CD**: a cada push na `main`, o GitHub Actions roda os testes e, se passarem, publica a imagem Docker no Docker Hub. Trabalho da pós-graduação na PUC Minas.

**Stack:** Node.js 26, Express 5, Jest e Supertest.

## Rodando com Docker (recomendado)

Só precisa do [Docker](https://docs.docker.com/get-docker/) com Compose.

```bash
git clone https://github.com/mateustassinari/pipeline_cicd_pos.git
cd pipeline_cicd_pos
docker compose up --build
```

Quando o log mostrar `Executando em http://localhost:3000`, a API está no ar.

## Rodando sem Docker

Requer Node.js 26+.

```bash
npm install
npm start
```

## Rotas

| Rota | Descrição |
|---|---|
| `GET /` | Redireciona para `/users` |
| `GET /users` | Lista os usuários |
| `GET /users/:id` | Retorna um usuário (400 se não existir) |
| `GET /products` | Lista os produtos |

Os dados são fixos, em `src/data/`.

## Testes

```bash
npm test
```

Roda o Jest com relatório de cobertura (gerado em `coverage/`).

## Pipeline (GitHub Actions)

O workflow em `.github/workflows/push.yml` tem dois jobs:

1. **build** — instala as dependências (`npm ci`) e roda os testes. Também roda em pull requests.
2. **deploy** — só depois do build passar e apenas em push na `main`: constrói a imagem e publica no Docker Hub com as tags `latest` e o SHA do commit.

Para o deploy funcionar, cadastre no repositório (Settings → Secrets and variables → Actions) os secrets `DOCKER_USERNAME` e `DOCKER_PASSWORD` (use um *access token* do Docker Hub como senha).

## Estrutura

```
src/
  server.js    # sobe o servidor HTTP (porta 3000, ou PORT)
  app.js       # configura o Express e monta as rotas
  routes/      # users e products
  data/        # dados fixos
test/          # testes com Jest + Supertest
```
