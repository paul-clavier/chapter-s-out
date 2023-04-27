import {
    fetchPublisher,
    isChapterAvailableOnPublisher,
} from "../infra/scraping-publisher.js";

export const fetchChapterAvailable = async (currentMangaChapter) => {
    return fetchPublisher().then((dom) =>
        isChapterAvailableOnPublisher(dom, currentMangaChapter),
    );
};
