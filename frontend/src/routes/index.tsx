import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const navigate = useNavigate();
  const [sessionCode, setSessionCode] = createSignal("");

  return (
    <main class="p-4 justify-center items-center flex flex-col">
      <div class="p-4 w-96 flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <h1 class="text-4xl font-bold">Foody</h1>
          <p class="text-lg">
            Foody helps you and your friends find the food that you all want to
            eat.
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter your session code"
          class="border border-gray-300 rounded-md p-2"
          value={sessionCode()}
          onInput={(e) => setSessionCode(e.target.value)}
        />
        <button
          class="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 hover:cursor-pointer"
          onClick={() => {
            navigate(`/session/${sessionCode()}`);
          }}
        >
          Join Existing Session
        </button>
        <div class="flex items-center space-x-2">
          <div class="h-px bg-gray-300 w-full"></div>
          <div class="text-sm text-gray-500">or</div>
          <div class="h-px bg-gray-300 w-full"></div>
        </div>
        <button
          class="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 hover:cursor-pointer"
          onClick={() => {
            navigate(`/session/${uuidv4()}`);
          }}
        >
          Create New Session
        </button>
      </div>
    </main>
  );
}
