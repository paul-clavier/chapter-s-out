// Launch weekly job to check if chapter is out
import { schedule } from "node-cron";
import { JOB_DAY, JOB_START_HOUR } from "./constants.js";
import { scrapeAndNotifyChapterAvailable } from "./main.js";

schedule(`0 ${JOB_START_HOUR} * * ${JOB_DAY}`, async () => {
    await scrapeAndNotifyChapterAvailable();
});
