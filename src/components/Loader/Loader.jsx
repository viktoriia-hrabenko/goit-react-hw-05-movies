import { FallingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <FallingLines
        color="#966844"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Loading>
  );
};