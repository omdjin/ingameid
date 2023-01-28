import dynamic from "next/dynamic";

const DynamicLatestBlog = dynamic(() => import("./fetcher"), {
  ssr: false,
  loading: () => "Loading...",
});

export default DynamicLatestBlog;
