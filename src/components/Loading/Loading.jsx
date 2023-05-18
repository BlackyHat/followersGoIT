import { MutatingDots } from 'react-loader-spinner';
import css from './Loading.module.css';

const Loading = () => {
  return (
    <div>
      <MutatingDots
        height="100"
        width="100"
        color="#5cd3a8"
        secondaryColor="#5cd3a8"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass={css.box}
        visible={true}
      />
    </div>
  );
};

export default Loading;
