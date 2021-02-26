import { MockPostService } from './MockPostService';
import { NewsFeed } from './NewsFeed';
import { JsonExportService } from './JSONExportService';

let mockService = new MockPostService();
mockService.export(new JsonExportService()).then((result) => {
    console.log(result);
});
