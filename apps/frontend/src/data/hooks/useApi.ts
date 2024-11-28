import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const fullUrl = `${urlBase}${uri}`;

    const response = await fetch(fullUrl);
    return extractData(response);
  }, []);

  const httpPost = useCallback(async function (path: string, body?: any) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const fullUrl = `${urlBase}${uri}`;

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    return extractData(response);
  }, []);

  async function extractData(response: Response) {
    let content: any;

    try {
      content = await response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(
          `Ocorreu um erro inesperado com status ${response.status}.`
        );
      }
      return null;
    }

    if (!response.ok) throw content;
    return content;
  }

  return { httpGet, httpPost };
}
