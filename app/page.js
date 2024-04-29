import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex gap-3 ">
        <Link href={"/creataccount"}>
          <h1>Create Account</h1>
        </Link>
        <Link href={"/login"}>
          <h1>Login</h1>
        </Link>
      </div>
    </main>
  );
}
