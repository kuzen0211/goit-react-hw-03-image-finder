import { RotatingLines } from 'react-loader-spinner';
import { Wraper } from './Loader.styled';

export function Loader() {
  return (
    <Wraper>
      <RotatingLines
        strokeColor="#cfe9ff"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Wraper>
  );
}
