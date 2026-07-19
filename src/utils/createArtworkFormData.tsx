import type { ArtworkFormType } from "../types/artwork.types";

export const createArtworkFormData = (data: ArtworkFormType) => {
    console.log("Form Data:", data);
    const formData = new FormData();
    
    formData.append("artist", "6a4807d5df0d709bdb5a9ece");
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("medium", data.medium);
    formData.append("yearCreated", data.yearCreated.toString());
    formData.append("tags", data.tags);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("status", data.status);
    formData.append("isFeatured", data.featuredWork.toString());
    formData.append("isForSale", data.isForSale.toString());

    data.images.forEach((image) => {
      formData.append(`images`, image);
    });

    return formData;

  }