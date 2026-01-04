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
git clone https://github.com/Abdulmazid24/fittrain-eu.git
cd fittrain-eu

# Install dependencies
cd client && npm install
cd ../server && npm install

# Setup environment (see below)
```

### Environment Setup

**Backend (.env):**
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
```

**Frontend (.env.local):**
```bash
VITE_API_URL=http://localhost:5000
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
- **Tailwind CSS v4** - Styling
- **TanStack Query v5** - Data fetching
- **React Router** - Navigation

### Backend
- **Node.js 20** - Runtime
- **Express 4.18** - Web framework
- **MongoDB** - Database
- **Upstash Redis** - Caching
- **Stripe** - Payments

### Deployment (100% Free Tier)
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Database (512MB free)
- **Cloudinary** - Image storage

---

## 📁 Project Structure

```
fittrain-eu/
├── client/         # React frontend
├── server/         # Express backend
├── docs/           # Documentation (private)
└── README.md       # This file
```

---

## 🤝 Contributing

Currently in active development. Contributions will be welcome soon!

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

## 🔗 Links

- **Live Demo:** Coming soon
- **Documentation:** See `docs/` folder (local only)

---

## 📊 Development Status

- [x] Phase 1: Project Setup
- [ ] Phase 2: Authentication
- [ ] Phase 3: Trainer Profiles
- [ ] Phase 4: Public Website
- [ ] Phase 5-12: In Progress...

**Last Updated:** January 2026
