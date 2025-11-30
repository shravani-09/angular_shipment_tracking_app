# 📦 Shipment Tracking App (Angular)

A clean, modular **Shipment Tracking Application** built using **Angular**, **TypeScript**, and **SCSS**.
This project was developed as part of a coding assessment and demonstrates architecture, reusable components, responsive UI, and coding practices.

---

## 🌐 Live Demo

The application is deployed on Netlify:

👉 **[https://shipmentapp.netlify.app/](https://shipmentapp.netlify.app/)**

Use the live URL to view:

* Shipment card rendering
* Status-based colors
* Responsive layouts
* Search functionality

---

## 🚀 Features

* 🔍 **Search** shipments by tracking number
* 🃏 **Shipment Cards** showing ID, status, origin, destination & dates
* 🎨 **Status-based color indicators**
* 📱 **Fully responsive layout** using pure SCSS
* ♿ **Accessible** and semantic HTML structure
* 🧩 **Reusable component-based architecture**

---

## 🏗️ Project Architecture

```
src/
 ├── app/
 │    ├── components/
 │    │      ├── search-box/         # Search input component
 │    │      ├── shipment-card/      # UI card for individual shipment
 │    │      └── shipment-list/      # Renders list of shipment cards
 │    │
 │    ├── services/
 │    │      └── shipment.service.ts # Mock data + filtering business logic
 │    │
 │    ├── models/
 │    │      └── shipment.model.ts   # TypeScript interfaces
 │    │
 │    ├── pages/
 │    │      └── tracking/           # Main shipment tracking page
 │    │
 │    ├── app.component.ts
 │    └── app.module.ts
 │
 ├── styles/
 │     └── globals.scss              # Variables, layout
 │
 ├── assets/
 └── environments/
```

### ✔ Architecture Principles Followed

* **Feature-based organization**
* **Loose coupling via reusable standalone components**
* **Services handle data operations**
* **Models ensure TypeScript safety**
* **SCSS modularization** 
* **Unidirectional data flow** via inputs & event emitters
* **Accessibility-first HTML**

---

## 🤖 AI-Assisted Development (Transparent Usage)

I used AI strictly to **improve productivity**

### AI Helped With:

#### 4️⃣ Code Review Suggestions

Suggestions such as:

* Naming conventions
* Refactoring repeated SCSS patterns
* Improving readability

---

## 🏃‍♀️ Running the Project

### Install dependencies

```sh
npm install
```

### Run the development server

```sh
ng serve
```

Runs at → **[http://localhost:4200](http://localhost:4200)**

### Build for production

```sh
ng build
```

### Run unit tests (if applicable)

```sh
ng test
```

---

## 🛠️ Tech Stack

* **Angular 17+**
* **TypeScript**
* **SCSS (responsive + modular)**
* **RxJS**
* **HTML5 + Accessibility principles**

---
