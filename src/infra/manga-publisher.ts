import { JSDOM } from "jsdom";
import { MANGA_NAME } from "../constants.js";

export const isChapterAvailable = (dom: JSDOM, chapter: number): boolean => {
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
