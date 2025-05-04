const STRAPI_BASE_URL = process.env.CMS_STRAPI_URL?.replace(/\/$/, "");
const CMS_STRAPI_TOKEN = process.env.CMS_STRAPI_TOKEN;

export const strapiGet = async <T>(
  endpoint: string,
  params?: URLSearchParams
): Promise<T> => {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${STRAPI_BASE_URL}${cleanEndpoint}${params ? `?${params}` : ""}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CMS_STRAPI_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch in strapi ${endpoint}`);
  }

  return await res.json();
};
