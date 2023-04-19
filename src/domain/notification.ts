import { sendMessageToInbox } from "../infra/notification-inbox.js";

export const completeNotification = async () => {
    await sendMessageToInbox("Chapter is available !");
};

export const failNotification = async () => {
    await sendMessageToInbox("We have not found the chapter ...");
};
