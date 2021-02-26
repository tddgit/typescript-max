import { Post } from './Post';
import { IExportPostService } from './IExportPostService';

export interface IPostService {
    getAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
    export(service: IExportPostService): Promise<string>;
}
