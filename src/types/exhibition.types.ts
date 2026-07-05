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