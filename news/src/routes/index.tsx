import type { FC } from "react";
import { Route, Routes } from "react-router";
import NewsList from "../components/newsList";
import ArticleDetail from "../components/newsDetail";

const RoutesIndex: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
      </Routes>
    </>
  );
};

export default RoutesIndex;
