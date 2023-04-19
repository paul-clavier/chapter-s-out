import got from "got";
import { JSDOM } from "jsdom";
import { JOB_LIMIT, JOB_REFRESH_RATE, MANGA_PUBLISHER_URL, } from "./constants.js";
import { isChapterAvailable } from "./infra/manga-publisher.js";
export const getChapterAvailable = async () => {
    return got(MANGA_PUBLISHER_URL)
        .then((response) => {
        const dom = new JSDOM(response.body);
        return isChapterAvailable(dom);
    })
        .catch((err) => {
        console.log(err);
        return false;
    });
};
let tryNumber = 0;
export const scrapeChapterAvailable = async () => {
    console.log("Fetch number", tryNumber);
    const isChapterAvailable = await getChapterAvailable();
    if (isChapterAvailable || tryNumber > JOB_LIMIT) {
        tryNumber = 0;
        if (isChapterAvailable)
            console.log("Chapter is available !");
        return;
    }
    tryNumber += 1;
    await setTimeout(scrapeChapterAvailable, JOB_REFRESH_RATE);
};
