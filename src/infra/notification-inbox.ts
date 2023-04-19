import fetch from "node-fetch";

/**
 * Sends asynchronous message into Google Chat
 */
export const sendMessageToInbox = (message: string) => {
    const data = JSON.stringify({
        text: message,
    });
    const url = process.env.CHAT_WEBHOOK_URL;
    if (!url) return;

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: data,
    });
};
