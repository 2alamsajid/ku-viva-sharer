# VivaSharer

A platform for sharing and exploring viva questions for different academic years and subjects.

## Description

**VivaSharer** is a web application designed to help students prepare for their viva examinations by providing a collaborative platform to share and access viva questions. Users can browse questions by year and subject, and contribute their own questions.

## Features

* Browse viva questions by academic year and subject.
* View details of each viva question (content, teacher, college, date).
* Add new viva questions for specific years and subjects.
* Responsive design for seamless use on desktop and mobile devices.
* Dark theme for a comfortable viewing experience.

## Technologies Used

### Frontend

* **Next.js** (React Framework)
* **TypeScript**
* **Tailwind CSS** (for styling)
* **Shadcn UI** (for UI components)
* **Lucide React** (for icons)
* **React Hook Form** (for form management)
* **Zod** (for schema validation)
* **Sonner** (for toasts/notifications)

### Backend / Data

* Server Actions or API routes for data fetching and submission (assumed)
* Data storage solution such as a database (assumed)

## Setup and Installation

1. **Clone the repository:**

```
git clone <repository_url>
cd VivaSharer
```

2. **Install dependencies:**

```
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root of the project and add necessary environment variables (e.g., database connection strings, API keys).

```
# Example:
DATABASE_URL="..."
```

4. **Run database migrations (if applicable):**

```
# Example using Prisma:
npx prisma migrate dev
```

5. **Start the development server:**

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

* Navigate to the homepage to select an academic year.
* Select a subject within the chosen year to view existing viva questions.
* Click the **"Add Viva"** button on the subject page to contribute a new question.
* Fill out the form with:

  * Viva question content
  * Teacher name
  * College
  * Date

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

```
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Commit your changes:

```
git commit -m 'feat: Add new feature'
```

5. Push to the branch:

```
git push origin feature/your-feature-name
```

6. Create a new Pull Request.

> Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the **MIT License**.
