import { Restuarant } from "~/models/location";

export default function RestuarantCard(props: { restuarant: Restuarant }) {
  return (
    <div class="flex flex-col space-y-2">
      <img
        src={props.restuarant.imageUrl}
        alt={props.restuarant.name}
        class="w-full h-48 object-cover"
      />
      <h3 class="text-md font-bold">{props.restuarant.name}</h3>
      <p class="text-sm text-gray-500">{props.restuarant.description}</p>
      <p class="text-sm text-gray-500">{props.restuarant.address}</p>
    </div>
  );
}
