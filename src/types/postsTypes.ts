export interface IPostsTypes{
    id:number;
    userId:number;
    body:string;
    title:string;
}
export interface IDataType {
    data:IPostsTypes[];
    isLoading:boolean;
    error:string;
    post:IPostsTypes;
}