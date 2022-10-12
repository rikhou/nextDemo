import { useRouter } from "next/router";
import Image from "next/image";

const PeopleDetail = ({ data }) => {
  const router = useRouter();

  if (!data) {
    return null;
  }
  return (
    <>
      <h3>Use getStaticProps and getStaticPaths for dynamic route</h3>
      <hr />
      <button style={{ marginBottom: 20 }} onClick={() => router.back()}>
        Go Back
      </button>
      <div>{data.name}</div>
      <div>Country: {data.country?.name}</div>
      <div>Birthday: {data.birthday}</div>
      <div>
        <a href={data.url} target="blank">
          {data.url}
        </a>
      </div>
      {data.image?.medium && (
        <Image
          src={data.image?.medium}
          alt="portrait"
          width={210}
          height={300}
        />
      )}
    </>
  );
};

export default PeopleDetail;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://api.tvmaze.com/people/${params.id}`);
  const data = await res.json();
  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://api.tvmaze.com/search/people?q=Alba");
  const data = await res.json();
  const paths = data.map((info) => ({ params: { id: `${info.person.id}` } }));

  return {
    paths,
    fallback: true,
  };
}
