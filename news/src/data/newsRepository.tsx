import BaseApi from "../api/index";
import type { NewsApiResponse } from "../types/news";

export interface INewsRepository {
  getTopHeadlines(
    country: string,
    page: number,
    pageSize: number
  ): Promise<NewsApiResponse>;
  searchNews(
    query: string,
    page: number,
    pageSize: number
  ): Promise<NewsApiResponse>;
}

const NewsRepository: INewsRepository = {
  async getTopHeadlines(
    country: string,
    page: number,
    pageSize: number
  ): Promise<NewsApiResponse> {
    try {
      const response = await BaseApi.get<NewsApiResponse>("/top-headlines", {
        params: {
          country,
          page,
          pageSize,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching top headlines:", error);
      throw error;
    }
  },

  async searchNews(
    query: string,
    page: number,
    pageSize: number
  ): Promise<NewsApiResponse> {
    try {
      const response = await BaseApi.get<NewsApiResponse>("/everything", {
        params: {
          q: query,
          page,
          pageSize,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error searching for news with query "${query}":`, error);
      throw error;
    }
  },
};

export default NewsRepository;
