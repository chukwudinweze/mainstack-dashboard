import SelectDaysBtn from "./SelectDaysBtn";
import Stack from "@mui/material/Stack";
import styles from "./SelectDays.module.css";

type daysType = number | string;

const days: daysType[] = [1, 3, 7, 30, "All Time", "Custom Date"];

const SelectDays = () => {
  return (
    <Stack className={styles.selectDays} spacing={1} direction="row">
      {days.map((day, index) => (
        <SelectDaysBtn key={index} days={day} />
      ))}
    </Stack>
  );
};

export default SelectDays;
