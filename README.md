# 🚗 Park Pro - Enterprise Car Rental Management SaaS

Park Pro is a modern, minimal, and responsive Back-Office Dashboard for enterprise rental car owners, managing the entire fleet lifecycle.

![License](https://img.shields.io/badge/license-MIT-blue.svg) 

---

## ✨ Core Features

Park Pro centralizes management across five key modules:

### 1. Dashboard & KPIs
Real-time overview with critical metrics including:
- **Fleet Utilization** - Current usage percentage across all vehicles
- **Active Rentals** - Number of ongoing reservations
- **Revenue Trend** - Financial performance tracking
- **Maintenance Alerts** - Upcoming and overdue service notifications
- Quick action links for common tasks

### 2. Fleet & Asset Management
Complete vehicle lifecycle management:
- Full CRUD operations for all vehicles
- Detailed tracking (VIN, License Plate, Daily Rate, Mileage)
- Lifecycle status management: `Available`, `Rented`, `Maintenance`, `Out of Service`
- Maintenance event logging and scheduling
- Comprehensive vehicle history

### 3. Reservation Management
Streamlined booking operations:
- Track complete booking lifecycle from `Confirmed` to `Cancelled`
- Advanced filtering by date range and customer
- Dedicated reservation creation form with automatic cost calculation
- Real-time availability checking
- Booking status updates and modifications

### 4. Financial Tracking
Comprehensive financial oversight:
- Complete transaction audit trail
- Payment method tracking (Credit Card, Debit, Cash, etc.)
- Transaction status monitoring (`Paid`, `Pending`, `Refunded`)
- Date-range financial reporting
- Revenue analytics and insights
- Reservation-linked payment records

### 5. Customer Profiles
Centralized customer relationship management:
- Comprehensive contact information database
- Aggregated rental history per customer
- Total spending analytics
- Internal notes and customer flagging system
- Customer activity tracking

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Frontend** | React (Vite) | Fast, modern UI with efficient state management |
| **Styling** | Tailwind CSS + Shadcn/UI | Responsive, minimalist corporate aesthetic with Dark Mode |
| **Icons** | Lucide-React | Crisp, functional icon library |
| **Architecture** | Single File App | Streamlined development in `App.jsx` |

### Design Philosophy
- **Typography**: Inter/Poppins font families for professional appearance
- **Responsive**: Mobile-first design, fully functional across all devices
- **Aesthetic**: Minimal corporate style with clean interfaces
- **Dark Mode**: Built-in theme switching for user preference

---


## 🎨 Key Features in Detail

### Dashboard Analytics
The dashboard provides at-a-glance insights with:
- Real-time fleet utilization percentage
- Active rental counter with trend indicators
- Revenue graphs and financial metrics
- Maintenance alert system with priority flagging

### Vehicle Management
Comprehensive fleet control:
- Add/Edit/Delete vehicles with detailed specifications
- Status tracking through vehicle lifecycle
- Maintenance scheduling with recurring event support
- Service history and cost tracking
- Vehicle availability calendar

### Booking System
Efficient reservation workflow:
- Quick booking creation with customer lookup
- Automatic pricing calculation based on duration
- Conflict detection and vehicle availability
- Multi-status booking pipeline
- Booking modification and cancellation

### Financial Module
Complete transaction oversight:
- Payment recording with multiple method support
- Transaction categorization and tagging
- Date-range financial reports
- Outstanding payment tracking
- Revenue forecasting

### Customer Management
Relationship-focused CRM:
- Unified customer profiles
- Rental history aggregation
- Lifetime value calculation
- Customer segmentation and flagging
- Communication history tracking

---


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


## 🗺️ Roadmap

- [ ] Multi-tenant support
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Automated billing system
- [ ] Integration with insurance providers
- [ ] GPS tracking integration
- [ ] Customer self-service portal

---

**Made with ❤️ for enterprise car rental management**