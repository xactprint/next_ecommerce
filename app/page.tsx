import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-80 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-white">Welcome to My Next.js App</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl euismod nunc. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl euismod nunc.
        </p>
      </main>
    </div>
  );
}
