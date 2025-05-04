import { UserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";

class messageApi {
  getMessagesFeed = async (
    page: number,
    size: number
  ): Promise<PageType<MessageType> | null> =>
    httpGetPublic(
      `messages/feed?${new URLSearchParams({ page: String(page), size: String(size) })}`
    );
}

export default new messageApi();
