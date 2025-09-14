import type { NasaImage } from "./types";

export async function fetchImages(count: number): Promise<NasaImage[] | null> {
    // Loop while all data is not image (APOD API sometimes gives links to Youtube instead of url to image)
    while (true) {
        try {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=soeBOchkkhvX4RCgLP2w4dvdbjHabTdNybgdE6LY&count=${count}`
            );
            const data = (await res.json()) as NasaImage[];

            const allImages = data.every(item => item.media_type === "image");
            if (allImages) return data;

        } catch (err) {
            console.error(err);
            return null;
        }
    }
}