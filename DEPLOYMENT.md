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

### Option A: Koyeb + Aiven (Recommended Free Strategy)

This combination is robust, fast, and **100% Free** with no credit card required.

#### 1. Database (Aiven)
1.  Sign in to **[Aiven.io](https://aiven.io/)**.
2.  **Create Service**: Select **MySQL**.
3.  **Plan**: Select the **Free Plan** (it might be under "Hobbyist" or "Free").
4.  **Region**: Select a region close to you.
5.  Once created, click on your service and look for **"Connection information"**:
    *   **Host**: (Copy this)
    *   **Port**: `25022` (or whatever it gives you)
    *   **User**: `avnadmin`
    *   **Password**: (Copy this)
    *   **Database**: `defaultdb`

#### 2. Backend (Koyeb)
1.  Sign in to **[Koyeb.com](https://www.koyeb.com/)**.
2.  **Create Service**: Select **GitHub** and pick your repository.
3.  **App Configuration**:
    *   **Work Directory**: `backend`
    *   **Run Command**: `php artisan serve --host 0.0.0.0 --port 8000`
4.  **Environment Variables**:
    *   `APP_KEY`: `e15b6f71ba62320a2ff055836dc570b8`
    *   `APP_ENV`: `production`
    *   `DB_CONNECTION`: `mysql`
    *   `DB_HOST`: (From Aiven)
    *   `DB_PORT`: (From Aiven)
    *   `DB_DATABASE`: `defaultdb`
    *   `DB_USERNAME`: `avnadmin`
    *   `DB_PASSWORD`: (From Aiven)
5.  **Deploy!** Koyeb will give you a public URL.

#### 3. Run Migrations
Visit: `https://your-koyeb-app-name.koyeb.app/api/deploy-migrate`

---

### Alternative: Railway.app (Paid/Trial Exhausted)
... (Retained for reference)

---

## 🔒 Production Verification

*   **Migrations**: Always run `php artisan migrate --force` after the first deployment.
*   **Seeding**: To populate the live database with the assessment data (Jane Austin, etc.), run:
    ```bash
    php artisan db:seed --force
    ```
*   **CORS**: Ensure your backend allows the Vercel domain in `config/cors.php` or the `bootstrap/app.php` middleware.
