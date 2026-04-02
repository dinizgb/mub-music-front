import type { Config } from "vike/types";
import vikePhoton from "vike-photon/config";
import vikeReact from "vike-react/config";

export default {
  title: "Mub — Music marketplace & instruments",
  description:
    "Discover musical instruments and marketplace resources for musicians, educators, and the music industry.",
  lang: "en",
  extends: [vikeReact, vikePhoton],
  prerender: true,
} satisfies Config;
