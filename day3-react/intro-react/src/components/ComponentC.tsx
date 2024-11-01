import { FC } from "react";
import styles from "./ComponentC.module.css";

interface ComponentCProps {
  nama: string;
}

const ComponentC: FC<ComponentCProps> = ({ nama }) => {
  return (
    <div>
      <h1 className={styles.biru}>Selamat Datang, {nama}</h1>
    </div>
  );
};

export default ComponentC;
