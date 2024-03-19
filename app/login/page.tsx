// import LoginForm from "@/components/login-form";
import Link from "next/link";

export default function LoginPage() {

  function login() {
    console.log("google");
  }

    return (
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
            <div className="w-32 text-white md:w-36">
              <h1>EducaPlay</h1>
            </div>
          </div>
          <Link href={"/dashboard"}>
          <h1>Login Form</h1>
          </Link>
          {/* <LoginForm /> */}
          <button onClick={login}>Login with google</button>
        </div>
      </main>
    );
  }