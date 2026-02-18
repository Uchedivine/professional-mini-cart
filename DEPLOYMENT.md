# Deployment Guide - Professional Mini Cart

This guide outlines the steps to deploy the Professional Mini Cart application to a live environment for final submission.

## 🚀 Frontend Deployment (Next.js)

The frontend is built with Next.js and is best hosted on **Vercel**.

1.  **Sign in to [Vercel](https://vercel.com/)**.
2.  **Import your GitHub Repository**.
3.  **Configure Project Settings**:
    *   **Framework Preset**: Next.js
    *   **Root Directory**: `frontend`
4.  **Environment Variables**:
    *   Add `NEXT_PUBLIC_API_URL`: Set this to your live backend URL (e.g., `https://your-backend.pxxl.pro/api`).
5.  **Deploy!** Vercel will automatically build and assign a production URL.

---

## 🏗️ Backend Deployment (Laravel)

You need a platform that supports PHP and MySQL.

### Option A: Pxxl.app (Recommended Free Strategy)
1.  **Sign in to [Pxxl.app](https://pxxl.app/)**.
2.  **Connect GitHub**: Grant access to your repository.
3.  **New Resource**: Create a **Database** first using the **MySQL** engine. Note down the Credentials (Host, User, Password, DB Name).
4.  **New Project**: Select your repository and specify `backend` as the **Base Directory**.
5.  **Environment Variables**:
    *   `APP_KEY`: Generate one using `php artisan key:generate --show`.
    *   `APP_ENV`: `production`
    *   `DB_CONNECTION`: `mysql`
    *   `DB_HOST`: (From Pxxl Database)
    *   `DB_PORT`: `3306`
    *   `DB_DATABASE`: (From Pxxl Database)
    *   `DB_USERNAME`: (From Pxxl Database)
    *   `DB_PASSWORD`: (From Pxxl Database)
6.  **Deploy**: Pxxl will build and deploy. Run your migrations via the Pxxl console.

### Option B: Railway.app (Premium)
1.  **Sign in to [Railway](https://railway.app/)**.
2.  **Create a New Project** from your GitHub repository (directory: `backend`).
3.  **Add MySQL**: Connect a MySQL service and link it to your backend.

---

## 🔒 Production Verification

*   **Migrations**: Always run `php artisan migrate --force` after the first deployment.
*   **Seeding**: To populate the live database with the assessment data (Jane Austin, etc.), run:
    ```bash
    php artisan db:seed --force
    ```
*   **CORS**: Ensure your backend allows the Vercel domain in `config/cors.php` or the `bootstrap/app.php` middleware.
