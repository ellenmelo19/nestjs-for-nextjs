# nestjs-for-nextjs

API construída com NestJS para servir o frontend `nextjs-for-nestjs`. Fornece autenticação JWT, CRUD de usuários e posts, upload de imagens e políticas básicas de segurança (CORS, rate limiting e validação de payloads).

**Visão técnica**
- NestJS com módulos isolados (`auth`, `user`, `post`, `upload`).
- Autenticação com JWT e `passport-jwt`.
- TypeORM com suporte a SQLite (better-sqlite3) ou PostgreSQL por variável de ambiente.
- Global `ValidationPipe` com `whitelist` e `forbidNonWhitelisted`.
- `helmet` e CORS com whitelist configurável.
- Rate limiting global via `@nestjs/throttler`.
- Upload de imagens com `multer` em memória e validação de tipo/tamanho.
- Servir arquivos estáticos em `/uploads`.

**Principais módulos**
- `auth`: login e emissão de JWT.
- `user`: gerenciamento de usuários.
- `post`: CRUD de posts.
- `upload`: upload e entrega de imagens.

**Variáveis de ambiente**
Defina um `.env` com os parâmetros abaixo:
- `APP_PORT`: porta do servidor (default 3001).
- `CORS_WHITELIST`: lista de origens permitidas (separadas por vírgula).
- `JWT_SECRET`: segredo do JWT.
- `JWT_EXPIRATION`: duração do token (ex.: `1d`).
- `DB_TYPE`: `better-sqlite3` ou `postgres`.
- `DB_DATABASE`: caminho do SQLite ou nome do banco Postgres.
- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`: conexão Postgres.
- `DB_SYNCHRONIZE`: `1` para auto-sync (não recomendado em produção).
- `DB_AUTO_LOAD_ENTITIES`: `1` para auto-load.

**Scripts**
- `npm run start:dev` inicia com watch.
- `npm run start` inicia o server.
- `npm run build` gera build.
- `npm run start:prod` roda o build.
- `npm run test` e `npm run test:e2e` executam testes.

**Estrutura (resumo)**
- `src/main.ts`: bootstrap, CORS, pipes e security.
- `src/app.module.ts`: composição de módulos e configuração do TypeORM.
- `src/auth`, `src/user`, `src/post`, `src/upload`: módulos de domínio.

**Integração com o frontend**
Exponha a API em `API_URL` do projeto `nextjs-for-nestjs`. O frontend espera endpoints de autenticação, posts, usuários e upload compatíveis com o esquema atual.
