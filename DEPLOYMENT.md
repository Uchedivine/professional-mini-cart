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
    *   Add `NEXT_PUBLIC_API_URL`: Set this to your live backend URL (e.g., `https://your-backend-alias.railway.app/api`).
5.  **Deploy!** Vercel will automatically build and assign a production URL.

---

## 🏗️ Backend Deployment (Laravel)

The backend is best hosted on **Railway.app** or **Render** because they offer managed MySQL databases.

### Railway.app Steps:
1.  **Sign in to [Railway](https://railway.app/)**.
2.  **Create a New Project** from your GitHub repository.
3.  **Add a MySQL Database**:
    *   Click "New" -> "Database" -> "Add MySQL".
4.  **Configure Backend Service**:
    *   Connect the `backend` directory.
    *   **Environment Variables**:
        *   `APP_KEY`: Generate one using `php artisan key:generate --show` or copy your local one.
        *   `APP_ENV`: `production`
        *   `APP_DEBUG`: `false`
        *   `DB_CONNECTION`: `mysql`
        *   `DB_HOST`: `${{MySQL.MYSQL_HOST}}` (Railway variable)
        *   `DB_PORT`: `${{MySQL.MYSQL_PORT}}` (Railway variable)
        *   `DB_DATABASE`: `${{MySQL.MYSQL_DATABASE}}` (Railway variable)
        *   `DB_USERNAME`: `${{MySQL.MYSQL_USER}}` (Railway variable)
        *   `DB_PASSWORD`: `${{MySQL.MYSQL_PASSWORD}}` (Railway variable)
5.  **Finalize**: Railway will automatically build and deploy. Run migrations via the Railway CLI or by adding a post-build command: `php artisan migrate --force`.

---

## 🔒 Production Considerations

*   **CORS**: Ensure your Laravel `config/cors.php` (or middleware) allows the Vercel domain.
*   **HTTPS**: Both Vercel and Railway provide automatic SSL.
*   **Seeding**: To populate the live database with the assessment data (Jane Austin, etc.), run:
    ```bash
    php artisan db:seed --force
    ```
