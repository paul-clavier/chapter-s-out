import { scrapeChapterAvailable } from "./download-manga-publisher.js";
// Launch weekly job to check if chapter is out
// schedule(`0 ${JOB_START_HOUR} * * ${JOB_DAY}`, async () => {
//     await scrapeChapterAvailable();
// });
await scrapeChapterAvailable();
