import Link from "next/link";

export default function Show(props) {
  return (
    <>
      <h3>getServerSideProps</h3>
      <hr />
      <ul>
        {props.shows.map((show) => (
          <li key={show.id}>
            <Link href="/show/[id]" as={`/show/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      shows: data.map((entry) => entry.show),
    },
  };
}
