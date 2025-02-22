# Fuzzie App - SaaS Automation Builder

Fuzzie is a powerful SaaS Automation Builder designed to help users create custom workflows, integrate third-party services, and automate repetitive tasks effortlessly. Built using Next.js, Clerk for authentication, PostgreSQL for database management, and React Flow for visual workflows, Fuzzie empowers developers and non-technical users alike to build complex automations with ease.




---

## Features

🔄 Visual Workflow Builder using React Flow

🔗 Third-Party Integrations (Google Drive, GitHub, Stripe, etc.)

🔐 Secure Authentication with Clerk SSO (Google, GitHub)

💳 Subscription Management (Free, Pro, Gold) using Razorpay

📦 Role-Based Access Control for Admin and Users

🧩 Tokenization & Encryption for secure API handling

🌐 OAuth Token Management for external service access

📊 Built-in analytics and logs for monitoring automation



---
## 🔧 Tech Stack

Framework: Next.js

Database: PostgreSQL

Authentication: Clerk

UI Components: Tailwind CSS

Visual Automation: React Flow

Payment Integration: Razorpay

Google API: Google Drive SDK



---

## 🚩 Project Structure

fuzzie-production/
│
├── app/                # Next.js app directory
│   ├── api/            # API routes
│   ├── components/     # Reusable React components
│   ├── workflows/      # Visual workflow components using React Flow
│   ├── connections/    # Third-party integration handlers
│
├── lib/                # Utility functions (Google API, Razorpay, etc.)
├── prisma/             # Prisma schema and database configuration
├── public/             # Public assets
├── styles/             # Tailwind CSS & global styles
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── package.json        # NPM dependencies and scripts
└── README.md           # Project documentation


---

## ⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/Coderx85/fuzzie-production.git
cd fuzzie-production


2. Install dependencies

npm install


3. Create .env.local file
Add your environment variables:

DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<db_name>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret


4. Run Prisma migrations
Initialize the database schema:

npx prisma migrate dev


5. Start the development server

npm run dev




---

## 💡 Usage Guide

1. Create an Account
Sign up using Google SSO or another supported method.


2. Build a Workflow

Use the visual workflow builder to add custom automation nodes.

Drag-and-drop different action nodes like Google Drive, GitHub, or custom webhooks.



3. Manage Subscriptions
Choose from:

Free - 10 credits

Pro - 100 credits

Gold - 1000 credits



4. Monitor & Manage

View logs of automation events

Check subscription usage and credits left





---

## 🔐 Admin Panel & Role-Based Access

Only admin users can:

Add or remove integration nodes

Manage subscription plans

View detailed app analytics




---

## 🛠️ Advanced Features

Token Encryption & Secure Handling using Clerk

Google Drive Integration via OAuth2 token fetched through Clerk

Stripe/Razorpay Payment Handling with Webhooks for real-time updates

GitHub Node Integration (coming soon)



---

## ✅ Contributing

1. Fork the repository


2. Create a new branch (git checkout -b feature/YourFeature)


3. Make your changes and commit (git commit -m 'Add some feature')


4. Push to the branch (git push origin feature/YourFeature)


5. Create a Pull Request




---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.


---

## 🤝 Acknowledgements

Web Prodigies for the initial project setup

React Flow for the visual automation builder

Clerk for seamless authentication
