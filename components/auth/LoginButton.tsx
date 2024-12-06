import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
      >
        Sign Out
      </button>
    );
  }
  
  return (
    <button
      onClick={() => signIn()}
      className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full transition"
    >
      Sign In
    </button>
  );
}