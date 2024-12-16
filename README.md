# Trello Appwrite Clone

A Trello-like application built with modern web technologies to replicate core functionality such as creating boards, managing tasks, and collaborating with teams. This project utilizes **Appwrite** as the backend to manage authentication, database operations, and real-time updates.

## Features

- **User Authentication**: Sign up, log in, and manage user sessions.
- **Board Management**: Create, update, and delete project boards.
- **Task Management**: Add, edit, move, and delete tasks within boards.
- **Real-time Updates**: Seamless updates to boards and tasks across multiple users.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

## Tech Stack

### Frontend
- **Next.js**: Framework for building React-based server-side rendered applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly-typed JavaScript for maintaining code quality.

### Backend
- **Appwrite**: Self-hosted backend-as-a-service platform for authentication, database, and file storage.

### Database
- **Appwrite Database**: Used for managing boards, tasks, and user data.

## Installation

Follow these steps to set up the project locally:

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (v16 or later).
2. Install [Appwrite](https://appwrite.io/docs/installation) and set up the server.
3. Set up your Appwrite project and obtain the following credentials:
   - Project ID
   - API Endpoint
   - API Key

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Aq7853gehc/trello-appwrite-clone.git
   ```
2. Navigate to the project folder:
   ```bash
   cd trello-appwrite-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create an `.env.local` file in the root directory and configure it with your Appwrite project details:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://<your-appwrite-endpoint>
   NEXT_PUBLIC_APPWRITE_PROJECT=<your-project-id>
   NEXT_PUBLIC_APPWRITE_API_KEY=<your-api-key>
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Sign Up/Login**: Create an account or log in using your credentials.
2. **Create Boards**: Add a new board to start managing tasks.
3. **Manage Tasks**: Add, edit, and move tasks between columns within your boards.
4. **Real-time Updates**: Collaborate with team members in real-time.

## Project Structure

```
.
├── components      # Reusable React components
├── pages           # Next.js pages
├── public          # Static assets
├── styles          # Tailwind CSS configurations
├── utils           # Helper functions and configurations
└── .env.local      # Environment variables (not included in the repo)
```

## Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a meaningful commit message"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request and describe your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Trello](https://trello.com/) for inspiring the design and functionality.
- [Appwrite](https://appwrite.io/) for simplifying backend management.
- [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for powering the frontend.

---
Feel free to explore and customize the project to suit your needs!

