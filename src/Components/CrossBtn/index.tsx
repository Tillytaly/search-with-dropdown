import { TCrossBtnProps } from "./types";

import styles from "./CrossBtn.module.scss";
const { crossBtn, cross } = styles;

const CrossBtn = ({ onClick }: TCrossBtnProps) => {
  return (
    <div className={crossBtn} onClick={onClick}>
      <div className={cross}></div>
    </div>
  );
};

export { CrossBtn };
