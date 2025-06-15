import { NextResponse } from "next/server";

export async function GET() {
  // Puedes generar dinámicamente tus rutas aquí
  const urls = [
    "https://tusitio.com/",
    "https://tusitio.com/about",
    // Agrega más rutas según tu proyecto
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => `<url><loc>${url}</loc></url>`)
        .join("\n")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}