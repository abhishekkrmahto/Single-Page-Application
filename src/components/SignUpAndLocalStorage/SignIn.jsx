import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");


  const handleForm = (e)=>{
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(email === storedUser.email && password === storedUser.password){
        alert("Login Success ✅")
    }else{
        alert("Wrong creds ❌")
    }
  }



  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            class="mx-auto h-10 w-auto"
          />
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign In a your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium text-gray-100"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                  autocomplete="email"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium text-gray-100"
                >
                  Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                  autocomplete="current-password"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={handleForm}
              >
                Sign In
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?
            <a
              href="#"
              class="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
