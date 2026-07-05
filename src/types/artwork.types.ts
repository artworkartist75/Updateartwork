export interface ArtworkForm {
    title: string;
    slug: string;
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