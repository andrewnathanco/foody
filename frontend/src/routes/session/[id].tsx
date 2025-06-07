import { useNavigate, useParams } from "@solidjs/router";
import { ArrowLeftIcon, ShareIcon } from "lucide-solid";

export default function Session() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <main class="p-4 justify-center items-center flex flex-col">
      <div class="p-4 w-96 flex flex-col space-y-4">
        <div class="flex justify-between items-center">
          <div
            class="text-sm text-gray-500 hover:cursor-pointer hover:text-gray-700 flex items-center space-x-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeftIcon class="w-4 h-4" />
            Go Back Home
          </div>
        </div>
        <h1 class="text-2xl font-bold">
          Session:{" "}
          <span class="text-gray-500 font-normal">
            {params.id.slice(0, 6)}...
          </span>
        </h1>
        <div class="flex-1"></div>
        <div class="flex flex-col space-y-2">
          <button
            class="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 hover:cursor-pointer flex items-center space-x-2 justify-center gap-2"
            onClick={() => {
              try {
                navigator?.share({
                  title: "Foody",
                  text: "Foody",
                  url: `${window.location.origin}/session/${params.id}`,
                });
              } catch (error) {
                console.error(error);
                alert("Failed to share session link: " + error);
              }
            }}
          >
            <ShareIcon class="w-4 h-4" />
            Share Session Link
          </button>
        </div>
      </div>
    </main>
  );
}
