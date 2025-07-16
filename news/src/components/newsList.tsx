import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, Typography, Alert, Row, Col, Divider, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import type { NewsArticle } from "../types/news";
import NewsRepository from "../data/newsRepository";
import { slugify } from "../helper/slugify";

const { Title, Text, Paragraph } = Typography;
const PAGE_SIZE = 10;

const NewsList = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialNews = async () => {
      try {
        const response = await NewsRepository.getTopHeadlines(
          "us",
          1,
          PAGE_SIZE
        );
        const fetchedArticles = response.articles;
        setArticles(fetchedArticles);
        setHasMore(fetchedArticles.length < response.totalResults);
      } catch (err) {
        let errorMessage = "An unknown error occurred.";
        if (err instanceof Error) errorMessage = err.message;
        setError(`Failed to fetch news: ${errorMessage}`);
        setHasMore(false);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchInitialNews();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    try {
      const response = await NewsRepository.getTopHeadlines(
        "us",
        nextPage,
        PAGE_SIZE
      );
      const newArticles = response.articles;

      if (newArticles.length === 0) {
        setHasMore(false);
        return;
      }

      const allArticles = [...articles, ...newArticles];
      setArticles(allArticles);
      setHasMore(allArticles.length < response.totalResults);
      setPage(nextPage);
    } catch (err) {
      let errorMessage = "An unknown error occurred.";
      if (err instanceof Error) errorMessage = err.message;
      setError(`Failed to fetch more news: ${errorMessage}`);
      setHasMore(false);
    }
  };

  if (error && articles.length === 0) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <Row justify="center">
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        <Title level={2} style={{ textAlign: "center", margin: "1.25rem 0" }}>
          US Top Headlines
        </Title>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div style={{ textAlign: "center", margin: "1.25rem 0" }}>
              <Spin size="large" />
            </div>
          }
          endMessage={
            articles.length > 0 ? (
              <Divider plain>No More Headline News</Divider>
            ) : null
          }>
          <List
            loading={initialLoading}
            itemLayout="vertical"
            size="large"
            dataSource={articles}
            renderItem={(article, index) => {
              const articleSlug = slugify(article.title);
              return (
                <List.Item
                  key={`${article.url}-${index}`}
                  extra={
                    article.urlToImage && (
                      <img
                        alt={article.title}
                        src={article.urlToImage}
                        style={{
                          objectFit: "cover",
                          height: "10rem",
                          width: "17rem",
                          maxWidth: "100%",
                        }}
                      />
                    )
                  }>
                  <List.Item.Meta
                    title={
                      <Link
                        to={`/article/${articleSlug}`}
                        state={{ article: article }}>
                        {article.title}
                      </Link>
                    }
                    description={
                      <Text type="secondary">
                        Source: {article.source.name}
                      </Text>
                    }
                  />
                  <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                    {article.description}
                  </Paragraph>
                </List.Item>
              );
            }}
          />
        </InfiniteScroll>
      </Col>
    </Row>
  );
};

export default NewsList;
