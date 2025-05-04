import { FAQPageType } from "@/types/faq.types";
import { StrapiResultType } from "@/types/strapi.types";
import { strapiGet } from "../common/strapi.service";

class FAQsAPI {
  getFAQPages = async (): Promise<StrapiResultType<FAQPageType>> => {
    try {
      const params = new URLSearchParams();
      return await strapiGet<StrapiResultType<FAQPageType>>(`/faq-pages`, params);
    } catch (error) {
      console.error("Error fetching FAQ Pages:", error);
      return {
        data: [],
        meta: {
          pagination: {
            page: 0,
            size: 0,
            totalElements: 0,
            totalPages: 0,
          },
        },
      };
    }
  };
}

export default new FAQsAPI();
