import {useState} from "react";

const B = () => {
  const [e, f] = useState(true)
  return (
      <div>
        {e && <h1 onClick={() => f(false)}>G</h1>}
        {!e && <h1 onClick={() => f(true)}>H</h1>}
      </div>
  )
}
export default B;