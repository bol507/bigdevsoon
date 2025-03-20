import { Fragment, useState } from "react";

const Like = () => {
  const [like, setLike] = useState(false);

  return (
    <Fragment>
      {like ? (
        <div
          className="text-red-600 text-4xl cursor-pointer"
          onClick={() => setLike(!like)}
        >
          ♥
        </div>
      ) : (
        <div
          className="text-zinc-700 text-4xl cursor-pointer"
          onClick={() => setLike(!like)}
        >
          ♡
        </div>
      )}
    </Fragment>
  );
};

export default Like