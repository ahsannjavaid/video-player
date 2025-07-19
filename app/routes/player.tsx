import type { Route } from "./+types/home";
import Player from "~/player/player";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Video Player" },
    { name: "description", content: "Welcome to this Video Player (SMOV Inspired) app!" },
  ];
}

export default function Home() {
  return <Player />;
}
