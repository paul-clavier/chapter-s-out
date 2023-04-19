import got from "got";
import { JSDOM } from "jsdom";
import {
    JOB_LIMIT,
    JOB_REFRESH_RATE,
    MANGA_PUBLISHER_URL,
} from "./constants.js";
import { isChapterAvailable } from "./infra/manga-publisher.js";

let tryNumber = 0;
let currentMangaChapter = 1081;

const fetchChapterAvailable = async (): Promise<boolean> => {
    return got(MANGA_PUBLISHER_URL)
        .then((response) => {
            const dom = new JSDOM(response.body);
            return isChapterAvailable(dom, currentMangaChapter);
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
};

const completeNotification = () => {
    console.log("Chapter is available !", Date.now());
    tryNumber = 0;
    currentMangaChapter += 1;
};

export const notifyChapterAvailable = async () => {
    console.log("Fetch number", tryNumber);
    const isChapterAvailable = await fetchChapterAvailable();

    if (isChapterAvailable) {
        completeNotification();
        return;
    }

    if (tryNumber > JOB_LIMIT) return;

    tryNumber += 1;
    await setTimeout(notifyChapterAvailable, JOB_REFRESH_RATE);
};
