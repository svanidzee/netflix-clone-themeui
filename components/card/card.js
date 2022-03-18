/** @jsxImportSource theme-ui */
import { useState } from "react";

import { styles, StyledImage, StyledMotion } from "./card-styles";

const card = (props) => {
  const { imgUrl = "/static/cliffo.webp", size = "medium", id } = props;

  const [src, setSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("error");
    setSrc(
      "https://images.unsplash.com/photo-1615413250263-bb04cc0a3988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpeGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    );
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div
      sx={{
        marginRight: "0.25rem",
        cursor: "pointer",
      }}
    >
      <StyledMotion sx={classMap[size]} whileHover={{ ...scale }}>
        <StyledImage
          src={src}
          alt="Card"
          layout="fill"
          onError={handleOnError}
        />
      </StyledMotion>
    </div>
  );
};

export default card;
