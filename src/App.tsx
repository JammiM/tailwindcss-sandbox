import { useState } from "react";
import chitChatIcon from "./assets/chat-icon.svg";
// import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <h1 className="text-3xl font-bold underline">Tailwind css test</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}

      <section className="container mx-auto border-2 border-blue-700">
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolor aliquid eius consequatur alias repellendus corrupti voluptates
          dolorem nemo ipsum corporis nisi exercitationem aspernatur, atque
          fugit. Voluptas qui voluptatibus pariatur!
        </p>
      </section>

      <section className="container mx-auto">
        <p className="text-center bg-red-400 sm:text-right sm:bg-blue-700 md:text-left md:bg-amber-700 lg:text-right lg:bg-yellow-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolor aliquid eius consequatur alias repellendus corrupti voluptates
          dolorem nemo ipsum corporis nisi exercitationem aspernatur, atque
          fugit. Voluptas qui voluptatibus pariatur!
        </p>
      </section>

      <section className="container mx-auto border-2 border-blue-700">
        <h4 className="text-2xl mb-1">Margin, padding</h4>
        <p className="text-base mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolor aliquid eius consequatur alias repellendus corrupti voluptates
          dolorem nemo ipsum corporis nisi exercitationem aspernatur, atque
          fugit. Voluptas qui voluptatibus pariatur!
        </p>
        <p className="text-base ml-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolor aliquid eius consequatur alias repellendus corrupti voluptates
          dolorem nemo ipsum corporis nisi exercitationem aspernatur, atque
          fugit. Voluptas qui voluptatibus pariatur!
        </p>
      </section>

      <section className="grid place-items-center p-5">
        <h1 className="text-9xl">H1</h1>
        <h2 className="text-5xl">H2</h2>
        <h3 className="text-xl">H3</h3>
        <p className="text-base">dfsdf dsfsfsd</p>
        <p className="text-sm">dfsdf dsfsfsd</p>
        <p className="text-xs note">dfsdf dsfsfsd</p>
      </section>

      <section>
        <div className="grid place-items-center p-5">
          <h4>Single component</h4>

          <div className=" mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img
              className="size-12 shrink-0 md:w-40 lg:w-10"
              src={chitChatIcon}
              alt="ChitChat Logo"
            />
            <div>
              <div className=" text-xl font-medium text-black dark:text-white">
                ChitChat
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                You have a new message!
                <a href="https://tailwindcss.com/docs/responsive-design">
                  Read here
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid place-items-center p-5">
          <h4>Hover states</h4>
          <button className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">
            Save changes
          </button>
        </div>

        <div className="grid place-items-center p-5">
          <h4>hover, focus, and active states</h4>
          <button
            type="button"
            className="rounded-full bg-violet-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
          >
            Save changes
          </button>
        </div>

        <div className="grid place-items-center p-5">
          <h4>invalid, focus, and disabled states</h4>
          <form action="">
            <input
              id="email-1"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
              placeholder="you@example.com"
              type="email"
              value="ja1mail.fcom"
              name="email"
            />
          </form>
        </div>

        <div className="grid place-items-center p-5">
          <h4>Example of dark mode</h4>

          <div className="bg-amber-200 dark:bg-slate-600">
            <p className="mt-5 p-5 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, distinctio. Iusto, iure exercitationem? Eos
              repudiandae doloremque nemo voluptas. Minus aspernatur similique
              ea, nostrum omnis quis voluptatum ab voluptatibus adipisci
              architecto.
            </p>
          </div>
        </div>

        <div className="grid place-items-center p-5 bg-amber-500 border-4">
          <h4 className="text-basic-test">Custom Colours component</h4>
          <p className="text-red-600 border-t-4 border-green-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            quas perferendis nostrum quam, maiores, consequuntur vero, unde
            neque quibusdam commodi laudantium ut repellendus voluptatem soluta
            nisi culpa a fugit veniam.
          </p>
        </div>

        <div className="grid place-items-center p-5">
          <h4>Flexbox examples</h4>
          <div className="flex flex-row">
            <div className="basis-64">01</div>
            <div className="basis-64">02</div>
            <div className="basis-128">03</div>
          </div>
        </div>
      </section>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
