export interface Collab {
    title: string;
    companyName: string;
    startDate: Date;
    endDate: Date;
    description: string;
    companyLogo: File | null;
    curruentlyWorking: boolean;
    active: boolean;
}