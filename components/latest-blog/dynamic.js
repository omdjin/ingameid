import dynamic from "next/dynamic";

const DynamicLatestBlog = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => "Loading..."
});

export default DynamicLatestBlog;
