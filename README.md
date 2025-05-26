## NBA-ETL - Extract, Transform and Load Project with NestJS

### 📄 Description
NBA-ETL is a work-in-progress ETL (Extract, Transform, Load) project built with the **NestJS** framework. Its main goal is to:

- 🚀 **Extract** data from an external API.
- ✨ **Transform** that data into a custom, clean format.
- 📂 **Load** the transformed data into a personal PostgreSQL database.

The project is designed to be **independent** from the source API's data structure and aims to ensure full control and flexibility over the stored data. 

This ETL pipeline uses modern backend practices and technologies such as **NestJS**, **TypeORM**, **PostgreSQL**, **Docker**, and structured data via **DTOs** and **Entities**.

A generic and dynamic API call method is being developed to allow scalable and reusable data fetching.

> ⚠️ This project is still in **active development**, and has been paused temporarily. Feedback and contributions are always welcome!

---

## ⚙️ Project Setup

```bash
$ npm install
```

## ✨ Compile and Run the Project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## ✅ Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## 🧱 Project Architecture

```
src/
├── app.module.ts
├── main.ts
├── players/
│   ├── dto/
│   │   ├── get-player.dto.ts
│   ├── entities/
│   │   ├── players.entity.ts
│   ├── mappers/
│   │   ├── players.mapper.ts
│   ├── players.controller.ts
│   ├── players.service.ts
├── teams/
│   ├── dto/
│   │   ├── get-team.dto.ts
│   ├── entities/
│   │   ├── teams.entity.ts
│   ├── teams.service.ts
│   ├── teams.controller.ts
├── etl/
│   ├── etl.service.ts
│   ├── etl.module.ts
├── shared/
│   ├── http/
│   │   ├── http.service.ts
│   ├── utils/
│   │   ├── retry.util.ts
```

> This structure promotes modularity, clarity, and reusability of logic in the ETL process.

---

## 🧰 Technologies Used
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: Type-safe JavaScript superset.
- **TypeORM**: Object-relational mapper for PostgreSQL integration.
- **PostgreSQL**: The main database for storing ETL-processed data.
- **Docker**: Used for containerizing the PostgreSQL instance.
- **Axios / HttpModule**: For fetching remote API data.
- **CacheModule**: In-memory temporary storage for intermediate processing.
- **DTOs & Entities**: To shape incoming and stored data formats.

---

## 📚 Resources
- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Community Discord](https://discord.gg/G7Qnnhy)
- [Official video courses](https://courses.nestjs.com/)
- [NestJS Devtools](https://devtools.nestjs.com)
- [NestJS on X](https://x.com/nestframework)
- [NestJS on LinkedIn](https://linkedin.com/company/nestjs)
- [NestJS Job Board](https://jobs.nestjs.com)

---

## 👨🏿 Author

Fred Nobre – Developer exploring data autonomy and backend architecture.

---

## 🚀 License

NB-ETL is an open-source project licensed under the [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE).

