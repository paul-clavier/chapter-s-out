import got from "got";
import { JSDOM } from "jsdom";
import { MANGA_NAME } from "../constants.js";

const MANGA_PUBLISHER_URL = "https://www.mangasail.net/";

export const isChapterAvailableOnPublisher = (
    dom: JSDOM,
    chapter: number,
): boolean => {
    let isChapterAvailable = false;

    const latestChapters = dom.window.document.querySelector("ul#latest-list");
    latestChapters?.childNodes.forEach((elem) => {
        const chapterRow = elem.lastChild?.firstChild?.lastChild?.firstChild;
        if (
            chapterRow?.firstChild?.textContent ===
                `${MANGA_NAME} ${chapter}` &&
            chapterRow.childNodes.length === 2
        )
            isChapterAvailable = true;
    });
    return isChapterAvailable;
};

export const fetchPublisher = async (): Promise<JSDOM> => {
    return got(MANGA_PUBLISHER_URL)
        .then((response) => {
            return new JSDOM(response.body);
        })
        .catch((err) => {
            console.log(err);
            return new JSDOM();
        });
};
