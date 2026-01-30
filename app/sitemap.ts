import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://landing.hold-point.ru/",
      lastModified: new Date(),
    },
    {
      url: "https://landing.hold-point.ru/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://landing.hold-point.ru/terms",
      lastModified: new Date(),
    },
  ];
}