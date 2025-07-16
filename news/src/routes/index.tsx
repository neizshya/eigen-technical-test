import type { FC } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home";
import NewsDetail from "../pages/newsDetail";

const RoutesIndex: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<NewsDetail />} />
      </Routes>
    </>
  );
};

export default RoutesIndex;
