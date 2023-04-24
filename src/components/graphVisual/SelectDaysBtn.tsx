import Chip from "@mui/material/Chip";
import styles from "./SelectDaysBtn.module.css";

interface labelTypes {
  days: number | string;
}

const SelectDaysBtn = ({ days }: labelTypes) => {
  let buttonLabel: string;
  if (typeof days === "string") {
    buttonLabel = days;
  } else {
    buttonLabel = `${days} ${
      typeof days !== "string" && days > 1 ? "days" : "day"
    }`;
  }
  return (
    <>
      <Chip className={styles.selectdayBtn} label={buttonLabel} />
    </>
  );
};

export default SelectDaysBtn;
