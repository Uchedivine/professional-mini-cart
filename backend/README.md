# Professional Mini Cart - Backend

This folder contains the Laravel-based backend for the Professional Mini Cart project. It provides high-fidelity API services for Plan management, Store configuration, and User Profiling, meeting all assessment requirements for a paid professional project.

## Requirements

- PHP >= 8.2
- Composer
- PHP >= 8.2
- Composer
- MySQL (XAMPP / phpMyAdmin)

## Setup Instructions

1.  **Navigate to backend directory**:
    ```bash
    cd backend
    ```

2.  **Install dependencies**:
    ```bash
    composer install
    ```

3.  **Environment Setup**:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4.  **Database Configuration (XAMPP)**:
    - Open **XAMPP Control Panel** and start **Apache** and **MySQL**.
    - Open **phpMyAdmin** (`http://localhost/phpmyadmin`).
    - Create a new database named **`professional_mini_cart`**.
    - The `.env` file is already pre-configured for MySQL:
      ```env
      DB_CONNECTION=mysql
      DB_HOST=127.0.0.1
      DB_PORT=3306
      DB_DATABASE=professional_mini_cart
      DB_USERNAME=root
      DB_PASSWORD=
      ```

5.  **Run Migrations & Seeders**:
    This will create the necessary tables for Users, Plans, and Stores, and populate them with test data (Jane Austin, Starter/Standard plans, etc.).
    ```bash
    php artisan migrate:fresh --seed
    ```

6.  **Start the Server**:
    ```bash
    php artisan serve
    ```

## API Modules

### Plans Module (`/api/plans`)
- Full CRUD operations for subscription plans.
- Supports pricing, status flags, and complex discount logic (Monthly/Yearly/Quarterly).
- **Security**: Handled via `PlanRequest` with XSS sanitization.

### Stores Module (`/api/stores`)
- Domain-specific store management.
- Relational mapping between Users and Plans.
- **Security**: Domain uniqueness and sanitization in `StoreRequest`.

### Profile Module (`/api/profile`)
- Secure user profile management (Name, Geolocation, Password).
- **Security**: Guarded by **Laravel Sanctum** (Bearer tokens).

## Security & Architecture

- **Validation**: Enforced via dedicated Laravel FormRequest classes.
- **Sanitization**: Automatic stripping of HTML tags from text inputs to prevent XSS.
- **Data Integrity**: Enforced via database constraints and Eloquent relationships.
- **Authentication**: Pre-configured with Sanctum for secure API access.

## Assessment submission
Implemented by Antigravity (Google Deepmind) focusing on clean architecture, security, and 1:1 design integration.
