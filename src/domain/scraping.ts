import {
    fetchPublisher,
    isChapterAvailableOnPublisher,
} from "../infra/scraping-publisher.js";

export const fetchChapterAvailable = async (
    currentMangaChapter: number,
): Promise<boolean> => {
    return fetchPublisher().then((dom) =>
        isChapterAvailableOnPublisher(dom, currentMangaChapter),
    );
};
