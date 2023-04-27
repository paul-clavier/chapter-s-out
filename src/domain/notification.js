import { sendMessageToInbox } from "../infra/notification-inbox.js";

export const completeNotification = async () => {
    console.log("Completing notification");
    await sendMessageToInbox("Chapter is available !");
};

export const failNotification = async () => {
    console.log("Failing notification");
    await sendMessageToInbox("We have not found the chapter ...");
};
