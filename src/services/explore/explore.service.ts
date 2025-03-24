import { httpGetPublic } from "../common/http.service";
import { TrendingHashtag } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import { TrendingUserType } from "@/types/user.types";

class ExploreApi {
  getTrendingHashtag = async (page: number, size: number): Promise<PageType<TrendingHashtag>> => {
    try {
      const params = new URLSearchParams({ page: page.toString(), size: size.toString() });
      return await httpGetPublic<PageType<TrendingHashtag>>(`explore/trending`, params);
    } catch (error) {
      console.error("Error fetching trending hashtags:", error);
      return {
          content: [],
          pagination: {
              page: 0,
              size: 0,
              totalElements: 0,
              totalPages: 0,
          },
      } as unknown as PageType<TrendingHashtag>;
    }
  };

  getFollowRecomendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> => {
    try {
      const params = new URLSearchParams({ page: page.toString(), size: size.toString() });
      return await httpGetPublic<PageType<TrendingUserType>>(`explore/follow-recommendations`, params);
    } catch (error) {
      console.error("Error fetching follow recommendations:", error);
      return {
          content: [],
          pagination: {
              page: 0,
              size: 0,
              totalElements: 0,
              totalPages: 0,
          },
      } as unknown as PageType<TrendingUserType>;
    }
  }


  
}

export default new ExploreApi();