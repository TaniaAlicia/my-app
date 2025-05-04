import { httpGetPublic } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";

class messageApi {
  getMessagesFeed = async (
    page: number,
    size: number
  ): Promise<PageType<MessageType> | null> =>
    httpGetPublic(
      `messages/feed?${new URLSearchParams({
        page: String(page),
        size: String(size),
      })}`
    );

  getMessageReplies = async ( id: string, page: number, size: number): Promise<PageType<MessageType> | null> =>
    httpGetPublic(
      `messages/${id}/replies?${new URLSearchParams({
        page: String(page),
        size: String(size),
      })}`
    );

  getMessage = async (id: string): Promise<MessageType | null> =>
    httpGetPublic(`messages/${id}`);
  

  async postMessage(message: string, parentId?: string): Promise<MessageType | null> {
    try {
      const body: any = { message };
      if (parentId) body.parentId = parentId;
  
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJpc3MiOiJzb2NpYWwtYXBpIiwiaWF0IjoxNjkxNTEzNzMxLCJ1c2VybmFtZSI6InNvbG8ifQ.hKQgfrMv4xbj8LZkrDKqoZiGYNtC6UL_xPoHkoKPCdI";
  
      const response = await fetch(`http://localhost:8080/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // 👈 aquí está el token
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error posting message:", error);
      return null;
    }
  }
  
  
}

export default new messageApi();