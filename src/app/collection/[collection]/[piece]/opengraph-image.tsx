import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { collections, getCollectionPiece } from "@/lib/collection";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ProductOgImageProps = {
  params: Promise<{ collection: string; piece: string }>;
};

export function generateStaticParams() {
  return collections.flatMap((collection) =>
    collection.pieces.map((piece) => ({
      collection: collection.id,
      piece: piece.slug,
    })),
  );
}

export default async function ProductOgImage({ params }: ProductOgImageProps) {
  const { collection: collectionId, piece: pieceSlug } = await params;
  const piece = getCollectionPiece(collectionId, pieceSlug);

  const productImageData = piece
    ? await readFile(join(process.cwd(), "public", piece.src.replace(/^\//, "")))
    : undefined;
  const productImageUrl = productImageData
    ? `data:image/png;base64,${productImageData.toString("base64")}`
    : "https://www.anurrakti.com/opengraph-image.png";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f6f0e7",
          color: "#1d1915",
        }}
      >
        <div
          style={{
            width: 440,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ebe0d0",
            padding: 36,
          }}
        >
          <img
            src={productImageUrl}
            alt=""
            width={piece?.width ?? 1200}
            height={piece?.height ?? 630}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              color: "#7e271e",
              fontSize: 24,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span>{piece?.collectionName ?? "ANURRAKTI"}</span>
            <span style={{ width: 70, height: 1, background: "#7e271e" }} />
            <span>Private enquiry</span>
          </div>

          <div
            style={{
              marginTop: 38,
              fontFamily: "Georgia, Times New Roman, serif",
              fontSize: 138,
              lineHeight: 0.88,
              letterSpacing: "-0.055em",
            }}
          >
            {piece?.title ?? "ANURRAKTI"}
          </div>

          <div
            style={{
              marginTop: 42,
              maxWidth: 560,
              color: "#4b443d",
              fontSize: 34,
              lineHeight: 1.35,
              fontStyle: "italic",
            }}
          >
            {piece?.note ?? "Heritage, reimagined."}
          </div>

          <div
            style={{
              marginTop: 54,
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#7e271e",
              fontSize: 20,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
            }}
          >
            <span>ANURRAKTI</span>
            <span>•</span>
            <span>One of one Indian clothing</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
