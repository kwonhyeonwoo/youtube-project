export interface Video{
    title:string;
    source:string;
    meta:{
        view:string;
        day:string;
    },

}
export interface Auth{
    avatar:string | null;
    email: string | null;
    name: string | null;
    nickName: string | null;
    _id: string | null;
}