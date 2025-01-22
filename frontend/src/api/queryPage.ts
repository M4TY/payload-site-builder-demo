export type BlockType = "text" | "image" | "heading";

export type Block =
  | {
      text?: string | null;
      id?: string | null;
      blockName?: string | null;
      blockType: "text";
    }
  | {
      image?: (number | null) | Media;
      id?: string | null;
      blockName?: string | null;
      blockType: "image";
    }
  | {
      text?: string | null;
      id?: string | null;
      blockName?: string | null;
      blockType: "heading";
    };

export interface Page {
  id: number;
  title: string;
  path: string;
  blocks?: Block[] | null;
  updatedAt: string;
  createdAt: string;
}

export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}

export async function queryPage() {
  const apiUrl = "http://localhost:3000/api/pages/1?depth=1";
  const response = await fetch(apiUrl);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();
  return data as Page;
}
