# BTB_React and Chakra UI

This project is developed as part of the BTB React application using **React**, **Chakra UI**, and a **Laravel** backend. The application enables users to manage their applications by submitting, saving as drafts, and viewing their saved drafts in the dashboard.

## Task Overview

The project includes the following features:

- **Landing Page**: Completed  
  - A responsive and user-friendly landing page as the entry point for the application.

- **Authentication**: Completed  
  - A secure authentication system that enables users to log in and access the dashboard.

- **Dashboard**: Completed  
  - After logging in, users are redirected to the dashboard.
  - The dashboard displays two cards:
    - **Draft Application**  
    - **Saved Application**

- **Form Submission and Save as Draft**: Completed  
  - Users can submit applications and save them as drafts for later editing.

- **Saved Application List**: Completed  
  - After saving an application as a draft, the saved applications are displayed in the saved application list on the dashboard.  
  - **Note**: Editing the saved drafts after saving as draft is not yet implemented. The list currently only shows saved applications.

## Features

- **Landing Page**:  
  - A clean, responsive design using Chakra UI.
  
- **Authentication**:  
  - User login functionality, ensuring secure access to the dashboard.
  
- **Dashboard**:  
  - Displays two main cards for managing applications:
    - **Draft Application**: A card to manage applications in draft state.
    - **Saved Application**: A card to view previously saved drafts.
  
- **Save as Draft**:  
  - The ability to save ongoing applications and continue editing later.

- **Saved Application List**:  
  - A list showing all saved drafts. Currently, no editing functionality is provided for saved drafts.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/arpa12/BTB_React.git
cd BTB_React
```

### 2. Frontend Installation (React)

Install dependencies for the React frontend:

```bash
npm install
```

### 3. Backend Installation (Laravel)

To set up the Laravel backend, follow these steps:

2. **Install Composer**:  
   If Composer is not installed, you can download it from [https://getcomposer.org/](https://getcomposer.org/) or install it globally using the following command:

   ```bash
   curl -sS https://getcomposer.org/installer | php
   ```

3. **Install PHP dependencies**:  
   Run the following command in the Laravel backend directory to install the required PHP dependencies:

   ```bash
   composer install
   ```

4. **Set up Environment Configuration**:  
   Copy the `.env.example` file to `.env` and configure the database and other environment settings:

   ```bash
   cp .env.example .env
   ```

5. **Run Migrations**:  
   Run the database migrations to set up the necessary tables:

   ```bash
   php artisan migrate
   ```

6. **Start the Laravel server**:  
   Finally, run the Laravel server:

   ```bash
   php artisan serve
   ```

The backend will now be available at [http://localhost:8000](http://localhost:8000).

### 4. Start the React Development Server

Now, you can start the React development server:

```bash
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Chakra UI**: A modular and accessible component library for building responsive UIs.
- **React Router**: For routing and navigation between pages.
- **Axios**: For making API requests to the Laravel backend.
- **Laravel**: Backend framework to handle API requests and manage data.
