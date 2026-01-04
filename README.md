# FitTrain-EU 🏋️‍♂️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Deployment](https://img.shields.io/badge/Status-Production%20Ready-success)](https://github.com/Abdulmazid24/fittrain-eu)

**European Gym Trainers Platform** - A premium MERN stack SaaS platform connecting European fitness trainers with clients.

---

## ✨ Features

- 🎯 **Trainer Marketplace** - Search and book verified trainers
- 📅 **Smart Booking** - Calendar integration with Stripe payments
- 💪 **Training Programs** - Structured workout plans with progress tracking
- 💳 **Secure Payments** - Stripe integration (EUR/GBP, SCA compliant)
- 🔒 **GDPR Compliant** - Full EU data protection compliance
- 📱 **Responsive Design** - Mobile-first premium UI
- 🌍 **Multi-Region** - UK, Germany, France, Spain support

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- MongoDB Atlas account (free tier)
- Stripe account (free)

### Installation

```bash
# Clone repository
git clone https://github.com/Abdulmazid24/fittrain-eu.git
cd fittrain-eu

# Install dependencies
cd client && npm install
cd ../server && npm install
```

### Environment Setup

**Server (.env):**
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_32_chars
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLIENT_URL=http://localhost:3000
```

**Client (.env.local):**
```bash
VITE_API_URL=http://localhost:5000
```

### Run Locally

```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm run dev
```

Visit: `http://localhost:3000`

---

## 🛠️ Tech Stack

### Frontend
- React 18.3 + Vite 5
- TypeScript
- Tailwind CSS v4 (custom design tokens)
- React Router v6
- Premium UI components

### Backend
- Node.js 20 + Express 4.18
- MongoDB + Mongoose
- JWT authentication
- Stripe Payment Intents
- Cloudinary image storage
- Upstash Redis (rate limiting)

### Deployment (100% Free Tier)
- **Frontend:** Vercel (100GB bandwidth)
- **Backend:** Render (750 hours/month)
- **Database:** MongoDB Atlas M0 (512MB)
- **Cache:** Upstash Redis (256MB)
- **Storage:** Cloudinary (25 credits/month)
- **Total Cost:** €0/month

---

## 📁 Project Structure

```
fittrain-eu/
├── client/                    # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Route pages
│   │   └── styles/          # Tailwind CSS
│   └── package.json
│
├── server/                   # Backend (Express)
│   ├── src/
│   │   ├── models/          # Mongoose models
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   ├── middlewares/     # Auth, rate limit
│   │   └── services/        # Stripe, email
│   └── package.json
│
├── .github/workflows/        # CI/CD
├── API_DOCS.md              # API documentation
└── README.md                # This file
```

---

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Trainers
- `GET /api/trainers` - List trainers (public)
- `GET /api/trainers/:id` - Trainer details
- `POST /api/trainers` - Create profile (trainer)
- `POST /api/trainers/certification` - Upload cert
- `PUT /api/trainers/:id/verify` - Verify (admin)

### Bookings
- `POST /api/bookings` - Create booking + payment
- `GET /api/bookings` - Get user bookings
- `PUT /api/bookings/:id` - Update status

### Programs
- `GET /api/programs` - List programs
- `POST /api/programs` - Create program (trainer)
- `POST /api/programs/:id/enroll` - Enroll + payment

### GDPR
- `POST /api/gdpr/export` - Export user data
- `DELETE /api/gdpr/delete-account` - Delete account
- `PUT /api/gdpr/consent` - Update consent

See [API_DOCS.md](./API_DOCS.md) for detailed documentation.

---

## 🎨 Features Implemented

### ✅ Phase 1: Project Setup
- Vite + React + TypeScript + Tailwind CSS v4
- Express backend with security middleware

### ✅ Phase 2: Authentication
- JWT + refresh tokens
- RBAC (Admin/Trainer/Client)
- Rate limiting with Redis
- GDPR consent tracking

### ✅ Phase 3: Trainer Profiles
- Cloudinary image uploads
- Certification verification
- Search & filter system

### ✅ Phase 4: Public Website
- Landing page
- Trainer marketplace
- Auth pages (login/register)

### ✅ Phase 5: Booking System
- Calendar scheduling
- Stripe checkout integration
- Status management

### ✅ Phase 6: Training Programs
- Workout plan builder
- Progress tracking
- Enrollment system

### ✅ Phase 7: Payment System
- Stripe Payment Intents (SCA compliant)
- EUR/GBP support
- Refund handling

### ✅ Phase 8: Dashboards
- Client dashboard
- Trainer dashboard
- Admin dashboard

### ✅ Phase 9: GDPR Compliance
- Data export (Article 15)
- Right to be forgotten (Article 17)
- Consent management

### ✅ Phase 10: Performance
- CI/CD pipeline (GitHub Actions)
- Deployment configs
- Production optimization

---

## 🚢 Deployment

### Vercel (Frontend)
```bash
cd client
vercel --prod
```

### Render (Backend)
- Push to GitHub
- Connect repository in Render dashboard
- Add environment variables
- Auto-deploys on push to main

---

## 📊 Development Status

**Completed:** 10/12 Phases (83%)

- [x] Project Setup
- [x] Authentication
- [x] Trainer Profiles
- [x] Public Website
- [x] Booking System
- [x] Training Programs
- [x] Payment System
- [x] Dashboards
- [x] GDPR Compliance
- [x] Performance & Deployment
- [ ] Testing (Phase 11)
- [ ] Final Polish (Phase 12)

**Last Updated:** January 4, 2026

---

## 🤝 Contributing

Currently in active development. Contributions welcome!

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

## 🔗 Links

- **Repository:** https://github.com/Abdulmazid24/fittrain-eu
- **API Docs:** [API_DOCS.md](./API_DOCS.md)
- **Live Demo:** Coming soon

---

**Built with ❤️ using MERN Stack**
