export interface Complaint {
    _id: string;
    title: string;
    description: string;
    categories: string[]; // Array of category IDs or names
    status: 'PENDING' | 'INPROGRESS' | 'RESOLVED' | 'REJECTED';
    userId: string; // ID of the user who submitted the complaint
    createdAt: Date;
}
