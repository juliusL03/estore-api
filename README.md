# 🛒 estore-api

An eCommerce REST API built with **Node.js**, **Express**, **TypeScript**, **PostgreSQL**, **Prisma**, and **Stripe** — following the MVC architecture.

## 🚀 Features

- RESTful API for managing products
- Stripe payment integration
- PostgreSQL database via Prisma ORM
- MVC folder structure
- Written in TypeScript
- Environment-based configuration

---

## 📁 Project Structure

```
estore-api/
│
├── prisma/                # Prisma schema & migrations
├── src/
│   ├── controllers/       # Request handlers
│   ├── routes/            # API routes
│   ├── models/            # (optional - types or future ORM logic)
│   ├── services/          # Stripe logic, auth, etc.
│   ├── middleware/        # Middleware like error handling or auth
│   ├── app.ts             # Express app setup
│   └── server.ts          # Entry point
├── .env                   # Environment variables
├── tsconfig.json
└── package.json
```

---

## 🧪 Requirements

- Node.js `>=18`
- PostgreSQL `>=12`
- Stripe account (for payments)

---

## 🔧 Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/your-username/estore-api.git
cd estore-api
npm install
```

### 2. Configure `.env`

Create a `.env` file in the root directory with the following content:

```env
# Database
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/estore_api_db"

# Stripe Secret Key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret

# App Port (optional)
PORT=5000
```

> 💡 Replace `your_password` and `sk_test_your_stripe_secret` with your actual credentials.

---

### 3. Set up the database

Run Prisma migrations and generate the client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

### 4. Run the server

```bash
npm run dev
```

The API will start on [http://localhost:5000](http://localhost:5000)

---

## 📦 Example API Endpoints

### `GET /api/products`

Returns a list of products.

### `POST /api/products`

Create a new product.

**Request Body:**
```json
{
  "name": "Test Product",
  "description": "Great product",
  "price": 49.99,
  "stock": 10
}
```

---

### `POST /api/payments/create-checkout-session`

Create a Stripe Checkout session.

**Request Body:**
```json
{
  "amount": 4999
}
```

---

## 🧰 Scripts

```bash
npm run dev       # Start server in development mode
npm run build     # Compile TypeScript
npm run start     # Run compiled server
```

---

## 📘 License

MIT