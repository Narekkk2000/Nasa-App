import { useState, useEffect } from "react";
import { getNasaStartEndDateResource } from "../../service/apiService";
import { extractProperties } from "../../utils/extractProperties";
import { useTranslation } from 'react-i18next';
import { currentDate } from '../../constants/index';
import AsteroidsInfoTable from "../../components/asteroidsInfoTable/AsteroidsInfoTable";
import SharedInput from "../../components/common/input/Input";
import SharedButton from "../../components/common/button/Button";
import styles from "./nearby-asteroids.module.css";



const NaearbyAsteroids = () => {
  const [data, setData] = useState(null);
  const [extractedProperties, setExtractedProperties] = useState(null);
  const [date, setDate] = useState({
    startDate: currentDate,
    endDate: currentDate,
  });
  const [error, setError] = useState(false);

  const { startDate, endDate } = date;

  const {t} = useTranslation();
  const {title, text, startDateText, endDateText} = t('nearbyAsteroidsInfo');
  console.log(title, text);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate((prev) => ({ ...prev, [name]: value }));
  };
  const handleStartEndDate = async () => {
    try {
      const getData = await getNasaStartEndDateResource(startDate, endDate);
      setData([...Object.values(getData)]);
      setError(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    }
  };

  useEffect(() => {
    const properties = extractProperties(data);
    setExtractedProperties(properties);
  }, [data]);


  return (
    <div className={styles.nearby_asteroids_wrapper}>
      <div className={styles.nearby_asteroids_info_field}>
        <h3 className={styles.nearby_asteroid_title}>
          {title}
        </h3>
        <p className={styles.nearby_asteroid_description}>
          {text}
        </p>
      </div>

      <div className={styles.submit_dates_field}>
        <div className={styles.date_inputs_wrapper}>
          <span>{startDateText}</span>
          <SharedInput
            type={"date"}
            name="startDate"
            value={startDate}
            onChange={handleChange}
          />
          <span>{endDateText}</span>
          <SharedInput
            type={"date"}
            name="endDate"
            value={endDate}
            onChange={handleChange}
          />
        </div>
        <SharedButton text={"submitButton"} onClick={handleStartEndDate} />
        {error && <p>Range is bigger then 7</p>}
      </div>

      {data !== null && (
        <AsteroidsInfoTable extractedProperties={extractedProperties} />
      )}
    </div>
  );
};

export default NaearbyAsteroids;
