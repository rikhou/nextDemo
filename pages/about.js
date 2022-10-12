import { useRouter } from "next/router";

export default function About({ data }) {
  const router = useRouter();
  return (
    <>
      <h1>About Us</h1>
      <hr />
      <p>This is a static page</p>
      <div>query data: {router.query.name}</div>
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
}
