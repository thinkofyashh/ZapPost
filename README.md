# 🚀 ZapPost – The Clown Version of Medium 🌽

Welcome to **ZapPost**, a fun, fast, and chaotic twist on the traditional blogging platform! Built for unfiltered expression, meme-worthy rants, and witty thoughts, ZapPost is where digital jesters post without pressure.

---

## 🛠️ Tech Stack

| Layer        | Tech Used                     |
|--------------|-------------------------------|
| Frontend     | React, TypeScript             |
| Backend      | Cloudflare Workers            |
| Validation   | Zod                           |
| Auth         | JWT                           |
| ORM          | Prisma                        |
| Database     | PostgreSQL                    |
| Language     | TypeScript (Full Stack)       |

---

## 🛆 Features

- ✍️ **Rich Text Posting** – Create posts like a true clown philosopher.
- 🌽 **Clown Mode** – Post anonymously for maximum chaos.
- 📸 **Meme + Media Support** – Easily embed GIFs, memes, and more.
- 🔐 **JWT Auth** – Secure login and session handling.
- ⚡ **Blazing Fast Edge Backend** – Powered by Cloudflare Workers.
- 📏 **Strict Validation & Type Safety** – Thanks to Zod + TypeScript.
- 🔄 **Connection Pooling & Optimized Queries** – With Prisma + PostgreSQL.

---

## 📁 Project Structure

```
zap-post/
├── frontend/         # React + Vite app
│   ├── components/
│   ├── pages/
│   ├── types/        # Zod inferred types
│   └── ...
├── backend/          # Cloudflare Workers
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── prisma/           # Prisma schema + migrations
├── .env
├── README.md
└── ...
```

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/zappost.git
   cd zappost
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file and configure:
   ```
   DATABASE_URL=your_postgres_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Prisma Migration**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the app**
   ```bash
   pnpm dev
   ```

---

## 🔐 Authentication

JWT-based authentication is used across the stack. Tokens are securely stored and validated via middleware on both frontend and backend.

---

## 📏 Type Safety

Zod is used for runtime validation and **frontend type inference** using `z.infer<typeof schema>` to keep everything strongly typed and maintainable.

---

## 📒 Contributing

PRs are welcome! Please follow the contribution guide (coming soon) and follow best practices for clean code and meaningful commits.

---

## 📄 License

This project is licensed under the MIT License.

---

> Built with laughter, TypeScript, and chaos by [Yash Rawat](https://github.com/yourusername)

