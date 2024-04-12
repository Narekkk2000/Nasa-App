import getNasaStartEndDateResource from '../service/apiService'


export   const extractProperties = (data) => {
    if (Array.isArray(data)) {
      const extractedProperties = [];

      data.forEach((item) => {
        if (Array.isArray(item) || typeof item === "object") {
          const properties = extractProperties(item);

          extractedProperties.push(...properties);
        }
      });

      return extractedProperties;
    }

    if (typeof data === "object" && data !== null) {
      if (
        "name" in data &&
        "id" in data &&
        "is_potentially_hazardous_asteroid" in data &&
        "absolute_magnitude_h" in data &&
        "close_approach_data" in data &&
        "miss_distance" in data.close_approach_data[0] &&
        "estimated_diameter" in data &&
        "kilometers" in data.estimated_diameter
      ) {
        const {
          name,
          id,
          is_potentially_hazardous_asteroid,
          absolute_magnitude_h,
          close_approach_data,
          estimated_diameter,
        } = data;
        const missDistance =
          data.close_approach_data[0].miss_distance.kilometers;
        const diameterMax =
          estimated_diameter.kilometers.estimated_diameter_max;
        return [
          {
            name,
            id,
            is_potentially_hazardous_asteroid,
            absolute_magnitude_h,
            missDistance,
            diameterMax,
          },
        ];
      }
    }
    return [];
  };