export interface ExhibitionForm {
    title: string;
    eventType: string;
    organizer: string;
    venue: string;
    city: string;
    state: string;
    country: string;
    startDate: string;
    endDate: string;
    achievements: string;
    description: string;
    certificate: File | null;
    eventImages: File[];
}

export interface ExhibitionToApi {
  title: string;
  _id: string;

  type:
    | "Art Fair"
    | "Exhibition"
    | "Competition"
    | "Workshop"
    | "Seminar"
    | "Festival";

  organizer: string;
  venue: string;
  city: string;
  state: string;
  country: string;

  startDate: string;
  endDate: string;

  description: string;

  certificateImage: {
    _id: string;
    url: string;
    publicId: string;
  };

  eventImages: {
    _id: string;
    url: string;
    publicId: string;
  }[];

  achievement: string;

  displayOrder: number;
}