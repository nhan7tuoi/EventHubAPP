export interface EventModel {
    authorId: string;
    date: number;
    endDate: number;
    image: string;
    startDate: number;
    title: string;
    users: string[];
    description: string;
    location: {
        title: string;
        address: string;
    };
}

export interface Location {
    title: string;
    address: string;
} 