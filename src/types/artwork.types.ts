export interface ArtworkFormType {
    title: string;
    category: string;
    medium: string;
    yearCreated: number;
    tags: string;
    description: string;
    price: number;
    status: string;
    images: File[];
    featuredWork: boolean;
    isForSale: boolean;
}

export interface ArtworkToApi {
  _id: string;
  artist: string;
  title: string;
  slug: string;
  description: string;
  category: string;

  artworkImages: {
    _id: string;
    url: string;
    publicId: string;
  }[];

  medium: string;

  dimensions: {
    height?: number;
    width?: number;
    depth?: number;
    unit: string;
  };

  yearCreated: number;

  tags: string[];

  isFeatured: boolean;
  isForSale: boolean;

  price: number;

  status: "Available" | "Sold" | "Reserved";

  views: number;
  likes: number;

  reviews: any[];

//   createdAt: string;
//   updatedAt: string;

//   __v: number;
}