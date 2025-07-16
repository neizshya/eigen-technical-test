import { useLocation, Link } from "react-router-dom";
import { Button, Typography, Image, Space, Divider, Alert } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import DOMPurify from "dompurify";
import type { NewsArticle } from "../types/news";

const { Title, Text } = Typography;

const ArticleDetail = () => {
  const location = useLocation();
  const article = location.state?.article as NewsArticle | undefined;

  if (!article) {
    return (
      <Alert
        message="Article Not Found"
        description="This can happen if you refreshed the page or came here directly."
        type="warning"
        showIcon
        action={
          <Link to="/">
            <Button type="primary">Go Home</Button>
          </Link>
        }
      />
    );
  }

  const cleanHtml = DOMPurify.sanitize(
    article.content || "No content available."
  );
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "us-US",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article>
      <Link to="/">
        <Button icon={<ArrowLeftOutlined />} style={{ marginBottom: "1rem" }} />
      </Link>
      <Title level={1}>{article.title}</Title>
      <Space split={<Divider type="vertical" />} wrap>
        <Text type="secondary">By {article.author || "Unknown Author"}</Text>
        <Text type="secondary">Source: {article.source.name}</Text>
        <Text type="secondary">Published on {formattedDate}</Text>
      </Space>
      <Divider />
      {article.urlToImage && (
        <Image
          width="100%"
          style={{
            maxWidth: "43.75rem",
            display: "block",
            margin: "0 auto 1.5rem auto",
          }}
          src={article.urlToImage}
          alt={article.title}
        />
      )}

      <div
        className="ant-typography"
        style={{
          lineHeight: "1.7",
          fontSize: "1rem",
          whiteSpace: "pre-wrap",
        }}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />

      <Divider />
      <div style={{ textAlign: "center" }}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <Button type="primary">
            Read Full Story on {article.source.name}
          </Button>
        </a>
      </div>
    </article>
  );
};

export default ArticleDetail;
