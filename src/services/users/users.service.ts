import { UserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";



class userApi{
    getUserData = async (username: string): Promise<UserType | null> => httpGetPublic<UserType>(`users/${username}`);
    getUserMessages = async (username: string): Promise<PageType<MessageType> | null> => httpGetPublic<PageType<MessageType>>(`users/${username}/messages`);
    getUserMessagesReplies = async (username: string): Promise<PageType<MessageType> | null> => httpGetPublic<PageType<MessageType>>(`users/${username}/messages/replies`);
}

export default new userApi();