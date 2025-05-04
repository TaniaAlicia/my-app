import { UserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";



class userApi{
    getUserData = async (username: string): Promise<UserType | null> => httpGetPublic<UserType>(`users/${username}`);
    getUserMessages = async (username: string): Promise<PageType<MessageType> | null> => httpGetPublic<PageType<MessageType>>(`users/${username}/messages`);
    getUserMessagesReplies = async (username: string): Promise<PageType<MessageType> | null> => httpGetPublic<PageType<MessageType>>(`users/${username}/messages/replies`);
    // Método para obtener la foto del usuario hardcodeada
    getUserPhoto = async (username: string): Promise<string | null> => {
        // Aquí puedes devolver la URL hardcodeada de la foto
        if (username === "ObiWan") {
            return "https://i.pinimg.com/236x/b3/4f/42/b34f425979930d568e97932dd3cb8e5e.jpg";
        }
        // Agregar más casos si es necesario
        return null; // Si el usuario no tiene foto hardcodeada, devuelve null
    }
}

export default new userApi();