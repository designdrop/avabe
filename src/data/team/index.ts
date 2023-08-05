// adapted from https://github.com/withastro/astro.build/blob/112bdc723b3ba305997c95d7ce02304624d0d3ce/src/data/showcase/index.ts

import type { TeamMember } from "~/types";
import teamData from "./team.json";



const allImages = import.meta.glob<ImageMetadata>("./images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

let _loadTeam: Promise<Array<TeamMember>>;

async function loadTeam(): Promise<Array<TeamMember>> {
  const team = await Promise.all(
    teamData.map(async (person) => {
      if (!(person.image in allImages)) {
        console.error(
          `Image for "${person.name}" not found (provided: "${person.image}")`
        );
      }

      const image = await allImages[person.image];

      return {
        ...person,
        image,
      };
    })
  );

  return team;
}
export async function getTeam() {
  _loadTeam = _loadTeam || loadTeam();
  return _loadTeam;
}