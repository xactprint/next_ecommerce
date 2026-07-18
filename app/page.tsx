
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h1 className="text-4xl font-bold text-black dark:text-white">Welcome to My Next.js App</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          This is a simple Next.js application with Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
