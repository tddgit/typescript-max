import { IPostService } from './IPostService';
import { Post } from './Post';

export class MockPostService implements IPostService {
    posts: Post[] = [];

    constructor() {
        this.posts = [
            {
                id: 1,
                title: 'Some title',
                body: 'Lorem ipsum dolor sit amet, consectetur adip',
                postedBy: 'postedBy me',
            },
            {
                id: 2,
                title: 'Some title2',
                body: 'Lorem ipsum dolor sit amet, consectetur adip',
                postedBy: 'postedBy me',
            },
            {
                id: 3,
                title: 'Some title3',
                body: 'Lorem ipsum dolor sit amet, consectetur adip',
                postedBy: 'postedBy me',
            },
        ];
    }

    getAll(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }

    save(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }
    export() {}
}
