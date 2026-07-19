export interface ArtistForm {
  profileImage: File | null;
  coverImage: File | null;

  name: string;
  profession: string;
  shortBio: string;
  bio: string;

  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  state: string;
  country: string;

  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
    linkedin: string;
    behance: string;
    dribbble: string;
    pinterest: string;
    twitter: string;
  };

  experience: string;
  isAvailableForWork: boolean;

  skills: string;
  specialties: string;
  languages: string;
}


export interface ArtistToApi {
  _id: string;
  name: string;
  profession: string;
  profileImage: {
    _id: string;
    url: string;
    publicId: string;
  }[];
  coverImage: {
    _id: string;
    url: string;
    publicId: string;
  }[];
  bio: string;
  shortBio: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  state: string;
  country: string;
  experience: number;
  isAvailableForWork: boolean;
  skills: string[];
  specialties: string[];
  languages: string[];

  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    behance?: string;
    dribbble?: string;
    pinterest?: string;
    twitter?: string;
  };
}