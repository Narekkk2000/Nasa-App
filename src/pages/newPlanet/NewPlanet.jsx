import { useState } from "react";
import { useTranslation } from "react-i18next";
import SharedInput from "../../components/common/input/Input";
import SharedButton from "../../components/common/button/Button";
import { validateTextInput } from "../../utils/validateTextInput";
import { validateFormErrors } from "../../utils/validateFormErrors";
import styles from "./new-planet.module.css";

const NewPlanet = () => {
  const [formData, setFormData] = useState({
    planetName: "",
    email: "",
    diameter: "",
    distance: "",
    yourName: "",
    selectedOption: "",
  });

  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const { title, placeholders } = t("newPlanet");
  const { planetName, galaxyName, diameter, distance, yourName, email } =
    placeholders;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (!validateTextInput(name, value)) return;

    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    const errors = validateFormErrors(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };

  return (
    <div className={styles.new_planet_wrapper}>
      <div className={styles.new_planet_content}>
        <h3 className={styles.new_planet_title}>{title}</h3>
        <div className={styles.new_planet_inputs_wrapper}>
          <SharedInput
            type="text"
            name="planetName"
            placeholder={planetName}
            value={formData.planetName}
            onChange={handleInputChange}
            error={errors.planetName}
          />
          <select
            className={styles.select_galaxy_name}
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              {galaxyName}
            </option>
            <option value="Milky Way">Milky Way</option>
            <option value="Messier 83">Messier 83</option>
            <option value="Black Eye Galaxy">Black Eye Galaxy</option>
            <option value="Pinwheel">Pinwheel</option>
            <option value="Canis Major Dwarf">Canis Major Dwarf</option>
            <option value="Somewhere else...">Somewhere else...</option>
          </select>
          {errors.selectedOption && (
            <p className={styles.error}>{errors.selectedOption}</p>
          )}
          <SharedInput
            type="number"
            name="diameter"
            placeholder={diameter}
            value={formData.diameter}
            onChange={handleInputChange}
            error={errors.diameter}
          />
          <SharedInput
            type="number"
            name="distance"
            placeholder={distance}
            value={formData.distance}
            onChange={handleInputChange}
            error={errors.distance}
          />
          <SharedInput
            type="text"
            name="yourName"
            placeholder={yourName}
            value={formData.yourName}
            onChange={handleInputChange}
            error={errors.yourName}
          />
          <SharedInput
            type="email"
            name="email"
            placeholder={email}
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <SharedButton text="submitButton" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default NewPlanet;
