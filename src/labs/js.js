import {useLocation} from "react-router-dom";

const A = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/');
  console.log(paths);
  const a = paths[1];
  const b = paths[2];
  return (
      <span>{a + b}</span>
  )
}

export default A;