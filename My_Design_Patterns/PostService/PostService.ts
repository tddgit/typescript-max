import { Post } from './Post';
import fs from 'fs';
import { IPostService } from './IPostService';
import { IExportPostService } from './IExportPostService';

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

    export(service: IExportPostService): Promise<string> {
        return this.getAll().then((posts) => service.export(posts));
    }
}
