import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useFetch = (path) => {
  return useSWR(`${process.env.NEXT_PUBLIC_API_HOST}${path}`, fetcher);
};

export default useFetch;
