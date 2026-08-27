import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedRoutes } from '@/components/AnimatedRoutes';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-base">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-[4.5rem]">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
