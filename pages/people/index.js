import Link from "next/link";

const People = ({ data }) => {
  return (
    <>
      <h3>Use getStaticProps</h3>
      <hr />
      {data.map((info) => {
        const id = info.person.id;
        const name = info.person.name;
        return (
          <div key={id} style={{ margin: 15 }}>
            <Link href={`/people/${id}`}>
              <a>
                <div>{name}</div>
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.tvmaze.com/search/people?q=Alba");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default People;
