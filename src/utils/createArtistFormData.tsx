import type { ArtistForm } from "../types/artist.types";
// import { useForm } from "react-hook-form";

export const createArtistFormData = (data: ArtistForm) => {

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("profession", data.profession);
    formData.append("shortBio", data.shortBio);
    formData.append("bio", data.bio);

    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("website", data.website);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);

    formData.append(
      "socialLinks",
      JSON.stringify(data.socialLinks)
    );

    formData.append("experience", data.experience);
    formData.append(
      "availableForWork",
      String(data.isAvailableForWork)
    );

    formData.append("skills", data.skills);
    formData.append("specialties", data.specialties);
    formData.append("languages", data.languages);

    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }

    if (data.coverImage) {
      formData.append("coverImage", data.coverImage);
    }
    
    return formData;
}
