export interface Complaint {
    _id: string;
    title: string;
    description: string;
    categories: string[]; 
    status: 'PENDING' | 'INPROGRESS' | 'RESOLVED' | 'REJECTED';
    userId: string; 
    createdAt: Date;
}
