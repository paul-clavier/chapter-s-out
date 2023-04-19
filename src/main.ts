import { JOB_LIMIT, JOB_REFRESH_RATE } from "./constants.js";
import {
    completeNotification,
    failNotification,
} from "./domain/notification.js";
import { fetchChapterAvailable } from "./domain/scraping.js";

let tryNumber = 0;
let currentMangaChapter = 1081;

export const scrapeAndNotifyChapterAvailable = async () => {
    const isChapterAvailable = await fetchChapterAvailable(currentMangaChapter);

    if (isChapterAvailable) {
        completeNotification();
        tryNumber = 0;
        currentMangaChapter += 1;
        return;
    }

    if (tryNumber > JOB_LIMIT) {
        await failNotification();
        return;
    }

    tryNumber += 1;
    await setTimeout(scrapeAndNotifyChapterAvailable, JOB_REFRESH_RATE);
};
