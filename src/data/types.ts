/* This is how NASA APOD json is laid out */
export interface NasaImage {
  title: string;         // Short title of the image
  url: string;           // Standard resolution image
  hdurl?: string;        // High-resolution image (optional)
  explanation: string;   // Full description of the image
  date: string;          // Date of the APOD
  media_type: "image" | "video"; // Type of media
}
