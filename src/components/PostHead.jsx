import { Link } from "react-router-dom";
import styles from "../styles/styles.module.css";
import PropTypes from "prop-types";

export const PostHead = ({ post }) => {
  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:3000/api/posts/${post._id}`,
      {
        method: "DELETE",
      }
    );

    const body = await response.text();
    const json = JSON.parse(body);

    if (response.ok) console.log("post deleted", json);
  };

  return (
    <li>
      <span className={styles.postHeadHeader}>
        <h2>
          <Link to={`/api/posts/${post._id}`}>{post.title}</Link>
        </h2>
        <span onClick={handleClick}>delete</span>
      </span>
      <div>{post.date}</div>
      <p>{post.content.substring(0, 200) + " ..."}</p>
    </li>
  );
};

PostHead.propTypes = {
  post: PropTypes.object,
};
