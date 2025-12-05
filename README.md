# Ecoswift Football Platform

## Overview
The **Ecoswift Football Platform** is a modern, web-based application designed to organize and promote eco-conscious football tournaments in East Africa. Built with a "Luxury & Green" aesthetic, it allows teams to register for tournaments, view schedules, and learn about the organization's mission to "Reduce, Reuse, Repower".

**Live Demo:** [https://ecoswift-football.vercel.app/](https://ecoswift-football.vercel.app/)

## Tech Stack
*   **Frontend**: React (Vite), TypeScript
*   **Styling**: Tailwind CSS, Vanilla CSS (Glassmorphism effects)
*   **Backend**: Supabase (PostgreSQL Database & API)
*   **Icons**: Lucide React
*   **Routing**: React Router

## Features
*   **Luxury & Green Theme**: A unique design system combining Gold (#D4AF37) and Neon Green (#39FF14) on a dark background.
*   **Hero Section**: Immersive landing screen with call-to-action.
*   **Tournament Schedule**: Interactive cards displaying qualifiers in Uganda/Ethiopia and the Grand Final in Kenya.
*   **Team Registration**: Fully integrated form for teams to sign up. Data is securely stored in Supabase.
*   **Global Mission**: Visual section showcasing the eco-friendly goals of the organization.

## Getting Started

### Prerequisites
*   Node.js (v18 or higher)
*   npm

### Installation
1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd ecoswift
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration (Supabase Setup)
To make the Registration Form work, you need a Supabase backend:

1.  **Create a Project**: Go to [Supabase](https://supabase.com) and create a new project.
2.  **Database Schema**:
    *   Go to the **SQL Editor** in your Supabase dashboard.
    *   Open the `supabase_schema.sql` file located in this project's root.
    *   Copy and paste the SQL content into the editor and run it. This creates the `teams` table and sets up security policies.
3.  **Environment Variables**:
    *   Create a `.env` file in the root directory (you can copy `.env.example`).
    *   Get your **Project URL** and **anon public key** from Supabase (Settings > API).
    *   Update the `.env` file:
        ```env
        VITE_SUPABASE_URL=your_supabase_project_url
        VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
        ```

### Running the Application
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
To create a production-ready build:
```bash
npm run build
```
The output will be in the `dist/` directory.

## Project Structure
*   `src/components`: Reusable UI components (`Hero`, `Navbar`, `Schedule`, `RegistrationForm`, `Mission`).
*   `src/pages`: Main page layouts (`Home`).
*   `src/lib`: Supabase client configuration logic.
*   `src/index.css`: Global styles, Tailwind directives, and custom utility classes.
*   `legacy_template/`: Archive of the original HTML template (for reference).

---
**Ecoswift Recyclers Global** - The Future of Football is Luxury and It's Green.
