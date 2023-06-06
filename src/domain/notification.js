import { sendMessageToInbox } from "../infra/notification-inbox.js";

export const completeNotification = async (chapter) => {
    console.log(`Completing notification: chapter ${chapter}`);
    await sendMessageToInbox(`Chapter ${chapter} is available !`);
};

export const failNotification = async (chapter) => {
    console.log(`Failing notification: chapter ${chapter}`);
    await sendMessageToInbox(`We have not found the chapter ${chapter} ...`);
};
