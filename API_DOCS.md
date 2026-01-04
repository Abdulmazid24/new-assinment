# FitTrain-EU API Documentation

## Base URL
```
Production: https://fittrain-eu-api.onrender.com
Local: http://localhost:5000
```

## Authentication
All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Auth Endpoints

### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "client",
  "country": "UK",
  "gdprConsent": {
    "marketing": true,
    "analytics": true
  }
}
```

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Logout
```http
POST /api/auth/logout
Authorization: Bearer <token>
```

---

## Trainer Endpoints

### Get All Trainers
```http
GET /api/trainers?specialty=Yoga&country=UK&minRating=4&page=1&limit=12
```

### Get Trainer Details
```http
GET /api/trainers/:id
```

### Create Trainer Profile (Trainer Only)
```http
POST /api/trainers
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "data": {
    "bio": "Experienced trainer...",
    "specialties": ["Yoga", "Pilates"],
    "pricing": {
      "hourlyRate": 50,
      "currency": "EUR"
    },
    "location": {
      "city": "London",
      "country": "UK"
    },
    "languages": ["English", "French"]
  },
  "profileImage": <file>
}
```

### Upload Certification (Trainer Only)
```http
POST /api/trainers/certification
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "name": "Personal Training Certification",
  "issuer": "NASM",
  "certificate": <file>
}
```

### Verify Trainer (Admin Only)
```http
PUT /api/trainers/:id/verify
Authorization: Bearer <token>
```

---

## Booking Endpoints

### Create Booking (Client Only)
```http
POST /api/bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "trainerId": "trainer_id",
  "date": "2026-01-15",
  "time": {
    "start": "10:00",
    "end": "11:00"
  },
  "duration": 60,
  "type": "online"
}

Response:
{
  "success": true,
  "data": {
    "booking": {...},
    "checkoutUrl": "https://checkout.stripe.com/..."
  }
}
```

### Get User Bookings
```http
GET /api/bookings
Authorization: Bearer <token>
```

### Update Booking Status
```http
PUT /api/bookings/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "confirmed"
}
```

---

## Program Endpoints

### Get All Programs
```http
GET /api/programs?category=Weight Loss&difficulty=Beginner&trainerId=xxx
```

### Create Program (Trainer Only)
```http
POST /api/programs
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "8-Week Weight Loss Program",
  "description": "Complete weight loss program...",
  "category": "Weight Loss",
  "duration": {
    "weeks": 8
  },
  "difficulty": "Beginner",
  "price": {
    "amount": 199,
    "currency": "EUR"
  }
}
```

### Enroll in Program (Client Only)
```http
POST /api/programs/:id/enroll
Authorization: Bearer <token>

Response:
{
  "success": true,
  "data": {
    "checkoutUrl": "https://checkout.stripe.com/..."
  }
}
```

---

## GDPR Endpoints

### Export User Data
```http
POST /api/gdpr/export
Authorization: Bearer <token>

Response: Complete user data as JSON
```

### Delete Account
```http
DELETE /api/gdpr/delete-account
Authorization: Bearer <token>
```

### Update Consent
```http
PUT /api/gdpr/consent
Authorization: Bearer <token>
Content-Type: application/json

{
  "marketing": true,
  "analytics": false
}
```

---

## Error Responses

```json
{
  "success": false,
  "message": "Error description"
}
```

Common Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 429: Too Many Requests
- 500: Server Error
