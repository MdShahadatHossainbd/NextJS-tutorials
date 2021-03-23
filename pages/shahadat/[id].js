export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(shahadat => {
    return {
      params: { id: shahadat.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { shahadat: data }
  }
}

const Details = ({ shahadat }) => {
  return (
    <div>
      <h1>{ shahadat.name }</h1>
      <p>{ shahadat.email }</p>
      <p>{ shahadat.website }</p>
      <p>{ shahadat.address.city }</p>
    </div>
  );
}

export default Details;