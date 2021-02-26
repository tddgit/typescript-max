import { IExportPostService } from './IExportPostService';
import { Post } from './Post';

export class JsonExportService implements IExportPostService {
    export(posts: Post[]): string {
        return JSON.stringify(posts);
    }
}
