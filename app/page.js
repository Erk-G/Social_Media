import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>What's Happening?</h1>
        <h4>New? Sign up now to get your own personalized timeline!</h4>
        <Link href="/signup">Sign up</Link>
      </div>
    </main>
  );
}
