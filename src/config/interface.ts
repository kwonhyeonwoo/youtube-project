export interface Video {
    videoUrl: string | null;
    title: string | null;
    descriptions: string | null;
    hashtags: [string | null];
    meta: {
        views: string | 0,
    },
    dateTime: string;
    owner: string;

}
export interface Auth {
    avatar: string | null;
    email: string | null;
    name: string | null;
    nickName: string | null;
    _id: string | null;
    videos?: {
        videoUrl: string | null;
        title: string;
        description: string;
        meta: {
            views: string | 0,
        }
        dateTime: string;
        _id: string;
    }
}