import type { ExhibitionForm } from "../types/exhibition.types";

export const createExhibitionFormData = (data: ExhibitionForm) => {
    console.log("Form Data:", data);
    const formData = new FormData();
    
    formData.append("artist", "6a4807d5df0d709bdb5a9ece");
    formData.append("title", data.title);
    formData.append("type", data.eventType);
    formData.append("organizer", data.organizer);
    formData.append("venue", data.venue);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("achievement", data.achievements);
    formData.append("description", data.description);

    if (data.certificate) {
      formData.append("certificate", data.certificate);
    }

    data.eventImages.forEach((image) => {
      formData.append("eventImages", image);
    });
    return formData;
  };