VivaSharerA platform for sharing and exploring viva questions for different academic years and subjects.DescriptionVivaSharer is a web application designed to help students prepare for their viva examinations by providing a collaborative platform to share and access viva questions. Users can browse questions by year and subject, and contribute their own questions.FeaturesBrowse viva questions by academic year and subject.View details of each viva question (content, teacher, college, date).Add new viva questions for specific years and subjects.Responsive design for seamless use on desktop and mobile devices.Dark theme for a comfortable viewing experience.Technologies UsedFrontend:Next.js (React Framework)TypeScriptTailwind CSS (for styling)Shadcn UI (for UI components)Lucide React (for icons)React Hook Form (for form management)Zod (for schema validation)Sonner (for toasts/notifications)Backend/Data:(Assumed) Server Actions or API routes for data fetching and submission.(Assumed) Data storage solution (e.g., database).Setup and InstallationClone the repository:git clone <repository_url>
cd VivaSharer
Install dependencies:npm install
# or
yarn install
# or
pnpm install
Set up environment variables:Create a .env.local file in the root of the project and add necessary environment variables (e.g., database connection strings, API keys).# Example:
# DATABASE_URL="..."
Run database migrations (if applicable):# Example using Prisma:
# npx prisma migrate dev
Start the development server:npm run dev
# or
yarn dev
# or
pnpm dev
The application will be available at http://localhost:3000.UsageNavigate to the homepage to select an academic year.Select a subject within the chosen year to view existing viva questions.Click the "Add Viva" button on the subject page to contribute a new question.Fill out the form with the viva question content, teacher name, college, and date.ContributingContributions are welcome! Please follow these steps:Fork the repository.Create a new branch (git checkout -b feature/your-feature-name).Make your changes.Commit your changes (git commit -m 'feat: Add new feature').Push to the branch (git push origin feature/your-feature-name).Create a new Pull Request.Please ensure your code follows the project's coding standards and includes appropriate tests.LicenseThis project is licensed under the MIT License.