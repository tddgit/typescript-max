import { IPostService } from './IPostService';
import { Post } from './Post';

export class NewsFeed {
    constructor(private _service: IPostService) {}

    show() {
        this._service.getAll().then((posts: Post[]) => {
            posts.forEach((post: Post) =>
                console.log(`${post.title} - ${post.body}`)
            );
        });
    }
}
