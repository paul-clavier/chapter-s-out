// Launch weekly job to check if chapter is out
// schedule(`0 ${JOB_START_HOUR} * * ${JOB_DAY}`, async () => {
//     await scrapeChapterAvailable();
// });

import { scrapeAndNotifyChapterAvailable } from "./main.js";

await scrapeAndNotifyChapterAvailable();
