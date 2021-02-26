import { MockPostService } from './MockPostService';
import { NewsFeed } from './NewsFeed';

let newsfeed = new NewsFeed(new MockPostService());
newsfeed.show();
