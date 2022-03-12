import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Box, Container } from "theme-ui";

import styled from "@emotion/styled";
import styles from "../../styles/card.module.css";
import cls from "classnames";

const ContainerDiv = styled.div`
  margin-right: 0.25rem /* 4px */;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  border-radius: 0.375rem /* 6px */;
  object-fit: cover;

  object-position: center;
  display: block;

  max-width: 100%;
`;

const StyledMotion = styled(motion.div)`
  position: relative;
  display: inline-block;
`;

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
    <ContainerDiv>
      <StyledMotion className={classMap[size]} whileHover={{ ...scale }}>
        <StyledImage
          src={src}
          alt="Card"
          layout="fill"
          onError={handleOnError}
        />
      </StyledMotion>
    </ContainerDiv>
  );
};

export default card;
