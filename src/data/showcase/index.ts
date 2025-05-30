import type { ShowcaseSite } from "~/types";
import type { ImageMetadata } from "astro";
import sitesData from "./sites.json";

const allImages = import.meta.glob<{ default: ImageMetadata }>(
  '../../assets/images/*.{png,jpg,jpeg}', { eager: true }
);

async function loadShowcase(): Promise<Array<ShowcaseSite>> {
  return sitesData.map((site) => {
    const imagePath = `../../assets/images/${site.image}`;
    const image = allImages[imagePath]?.default; // <-- THIS IS CORRECT!
    if (!image) {
      console.error(
        `Image for "${site.title}" not found (provided: "${site.image}")`
      );
    }
    return {
      ...site,
      image, // This will be undefined if not found
    };
  });
}

let _loadShowcase: Promise<Array<ShowcaseSite>>;

export async function getShowcase() {
  _loadShowcase = _loadShowcase || loadShowcase();
  return _loadShowcase;
}

console.log("allImages keys:", Object.keys(allImages));
console.log("site images:", sitesData.map(site => `../../assets/images/${site.image}`));
