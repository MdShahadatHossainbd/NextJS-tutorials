import Link from 'next/link';
import styles from '../../styles/Shahadat.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Shahadat = ({ ninjas }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Mans</h1>
      {ninjas.map(ninja => (
        <Link href={'/shahadat/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Shahadat;