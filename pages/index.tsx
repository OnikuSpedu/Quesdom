import Link from "next/link";
import { useUser } from "../hooks/useUser";
import { auth } from "../config/firebase";

export default function Home() {
  const user = useUser();

  const handleSignOut = async () => {
    try {
      return await auth.signOut();
    } catch (err) {
      return err;
    }
  };

  return (
    <div>
      {user && <h1>You are logged in with {user.email}</h1>}

      <ul className="ml-8 list-disc">
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>SignUp</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>
        <li>
          <Link href="/createQuiz">
            <a>Create Quiz</a>
          </Link>
        </li>
      </ul>

      {user && (
        <button onClick={handleSignOut} className="mt-3 p-2 bg-gray-300">
          Sign Out
        </button>
      )}
    </div>
  );
}
