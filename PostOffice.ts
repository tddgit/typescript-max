import * as fs from 'fs';

export interface Post {
    id: number;
    title: string;
    body: string;
    postedBy: string;
}

export interface IPostService {
    getAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
}

export class PostsService implements IPostService {
    private _fileName: string = 'posts.json';

    getAll(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(this._fileName, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }
    save(post: Post): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getAll().then((posts: Post[]) => {
                posts.push(post);
                fs.writeFile(this._fileName, JSON.stringify(posts), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        });
    }
}

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
}

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

let newsfeed = new NewsFeed(new MockPostService());
newsfeed.show();
