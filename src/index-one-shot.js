// Launch weekly job to check if chapter is out
import { scrapeAndNotifyChapterAvailable } from "./main.js";

await scrapeAndNotifyChapterAvailable();
