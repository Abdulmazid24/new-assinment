# FitTrain-EU 🏋️‍♂️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)

**European Gym Trainers Platform** - একটি premium MERN stack SaaS platform যা European fitness trainers এবং clients কে connect করে।

---

## ✨ Features

- 🎯 **Trainer Marketplace** - Verified trainers খুঁজুন ও book করুন
- 📅 **Smart Booking** - Timezone-aware scheduling system
- 💳 **Secure Payments** - Stripe integration (EUR/GBP support)
- 🔒 **GDPR Compliant** - EU data protection standards
- 🌍 **Multilingual** - EN, DE, FR, ES support
- 📱 **Responsive Design** - Mobile-first approach

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- MongoDB Atlas account (free)
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/Abdulmazid24/new-assinment.git
cd fittrain-eu

# Install dependencies
cd client && npm install
cd ../server && npm install

# Setup environment (see .env.example in server/)
```

### Run Locally

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

Visit: `http://localhost:3000`

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS v4** - Styling with custom design tokens
- **React Router** - Navigation
- **TypeScript** - Type safety

### Backend
- **Node.js 20** - Runtime
- **Express 4.18** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Zod** - Input validation

### Services & Integrations
- **Upstash Redis** - Rate limiting & caching
- **Cloudinary** - Image uploads
- **Stripe** - Payment processing
- **Nodemailer** - Email service

### Deployment (100% Free Tier)
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Database (512MB free)

---

## 📁 Project Structure

```
fittrain-eu/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── styles/       # Tailwind CSS
├── server/               # Express backend
│   ├── src/
│   │   ├── models/       # Mongoose models
│   │   ├── controllers/  # Route controllers
│   │   ├── routes/       # API routes
│   │   ├── middlewares/  # Auth, rate limit
│   │   └── config/       # DB, Cloudinary
├── docs/                 # Documentation (private)
└── README.md            # This file
```

---

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Trainers
- `GET /api/trainers` - List verified trainers (public)
- `GET /api/trainers/:id` - Get trainer details
- `POST /api/trainers` - Create profile (trainer only)
- `POST /api/trainers/certification` - Upload certification
- `PUT /api/trainers/:id/verify` - Verify trainer (admin)

---

## 🤝 Contributing

Currently in active development. Contributions will be welcome soon!

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

## 📊 Development Status

- [x] **Phase 1: Project Setup** ✅
  - Vite + React + TypeScript
  - Tailwind CSS v4 
  - Express backend

- [x] **Phase 2: Authentication** ✅  
  - JWT auth with refresh tokens
  - RBAC (Admin/Trainer/Client)
  - Rate limiting
  - GDPR compliance

- [x] **Phase 3: Trainer Profiles** ✅
  - TrainerProfile model
  - Cloudinary integration
  - Certification upload
  - Admin verification
  - Search & filters

- [x] **Phase 4: Public Website** ✅
  - Landing page
  - Trainer marketplace
  - Auth pages
  - Responsive layout

- [ ] Phase 5: Booking & Scheduling
- [ ] Phase 6: Training Programs
- [ ] Phase 7: Payment System
- [ ] Phase 8-12: Coming soon...

**Last Updated:** January 4, 2026  
**Progress:** 4/12 Phases Complete (33%)
