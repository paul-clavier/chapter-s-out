import { JOB_LIMIT, JOB_REFRESH_RATE } from "./constants.js";
import {
    completeNotification,
    failNotification,
} from "./domain/notification.js";
import { fetchChapterAvailable } from "./domain/scraping.js";

let tryNumber = 0;
let currentMangaChapter = parseFloat(process.env.CHAPTER);

export const scrapeAndNotifyChapterAvailable = async () => {
    console.log(`Starting job for chapter ${currentMangaChapter}`);
    const isChapterAvailable = await fetchChapterAvailable(currentMangaChapter);

    if (isChapterAvailable) {
        completeNotification(currentMangaChapter);
        tryNumber = 0;
        currentMangaChapter += 1;
        return;
    }

    if (tryNumber > JOB_LIMIT) {
        await failNotification(currentMangaChapter);
        return;
    }

    if (tryNumber % 100 === 0) {
        console.log(`Try number ${tryNumber}`);
    }
    tryNumber += 1;
    await setTimeout(scrapeAndNotifyChapterAvailable, JOB_REFRESH_RATE);
};
