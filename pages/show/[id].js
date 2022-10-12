import Image from "next/image";

const Post = (props) => (
  <>
    <h1>{props.show.name}</h1>
    <Image
      src={props.show.image.medium}
      alt="medium"
      width={200}
      height={300}
    />
  </>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
