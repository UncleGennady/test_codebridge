export interface IPost{
    id:	number,
    featured: boolean,
    default: false,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: [{
        id?: string,
        provider? : string,
    }],
    events:[{
        id?: string,
        provider?: string,
    }],
}

export interface IPostCard {
    imageUrl: string,
    title : string,
    publishedAt: string,
    summary: string,
    id: number,
}