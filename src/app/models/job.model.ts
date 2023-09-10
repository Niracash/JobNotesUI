export interface Job {
    id: string,
    companyName: string,
    email: string,
    phoneNumber: string,
    details: string,
    searched: boolean,
    createdDate: Date,
    searchedDate: Date,
    isRemoved: boolean,
    removedDate: Date
};