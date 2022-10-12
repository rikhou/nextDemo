export default function Home({ data }) {
  return (
    <>
      <div>Name: {data.name}</div>
      <div>
        Summary: <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
      </div>
      <div>Rating: {data.rating?.average}</div>
    </>
  );
}

Home.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/episodes/1?embed=show");
  const data = await res.json();

  return {
    data,
  };
};
