import useSWR from "swr";
import fetcher from "../util/fetcher";

export default function Profile() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <h3>Use useSWR and API route</h3>
      <hr />
      <div>hello {data.name}!</div>
    </>
  );
}
