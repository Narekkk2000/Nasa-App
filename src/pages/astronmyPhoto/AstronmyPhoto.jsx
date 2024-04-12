import { useState } from "react";
import { getNasaResource } from "../../service/apiService";
import { currentDate } from "../../constants";
import SharedButton from "../../components/common/button/Button";
import SharedInput from "../../components/common/input/Input";
import SharedImage from "../../components/common/image/Image";
import styles from "./astronomy-photo.module.css";

const AstronmyPhoto = () => {
  const [data, setData] = useState(null);

  const [dateValue, setDateValue] = useState(currentDate);
  const [error, setError] = useState(false);

  const handleGetAstromyData = async () => {
    try {
      const data = await getNasaResource(dateValue);
      setData(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const handelChange = (e) => setDateValue(e.target.value);

  return (
    <div className={styles.astronomyPhotoPageWrapper}>
      <div className={styles.submit_field}>
        <SharedInput type="date" onChange={handelChange} value={dateValue} />
        <SharedButton text={"submitButton"} onClick={handleGetAstromyData} />
      </div>
      {error && <p>Invalid Date</p>}
      {data !== null && (
        <>
          <h1>{data.title}</h1>
          <div className={styles.astronomy_photo_wrapper}>
            <SharedImage src={data.url} />
          </div>
          <a href={data.hdurl}>Hd link of picture</a>

          <p className={styles.photo_explanation}>{data.explanation}</p>
        </>
      )}
    </div>
  );
};

export default AstronmyPhoto;
