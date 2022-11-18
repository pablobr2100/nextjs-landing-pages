import P from 'prop-types';
import config from '../config';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const fetchData = await fetch(
    `${config.url}${config.defaultSlug}&populate=deep`,
  );
  const json = await fetchData.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
