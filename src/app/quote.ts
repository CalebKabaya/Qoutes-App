export class Quote {
    id:number;
    name:string;
    quote:string;
    author:string;
    upvotes:number;
    downvotes:number;

    constructor(id:number,name:string,quote:string,author:string,upvotes:number,downvotes:number){
        this.id=id;
        this.name=name;
        this.quote=quote;
        this.author=author;
        this.upvotes=0;
        this.downvotes=0;

    }
}
