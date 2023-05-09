interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-100 bg-white">
        <div className="h-16 border-b border-slate-200 py-4">
          <nav className="ml-4 pl-6 flex items-center">
            <img src="logo.png" alt="Logo" className="mr-4 w-auto h-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 xl:max-h-28"/>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
