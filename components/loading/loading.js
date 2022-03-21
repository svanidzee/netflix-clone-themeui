import { Spinner } from "theme-ui";

const Loading = () => {
  // return <p className={styles.loader}>...Loading</p>;
  return (
    <Spinner>
      <p>...Loading</p>
    </Spinner>
  );
};

export default Loading;
