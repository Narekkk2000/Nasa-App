import { truncateNumber } from "../../utils/truncate";
import styles from './asteroids-info-table.module.css'

const AsteroidsInfoTable = ({ extractedProperties }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Distance(km)</th>
          <th>Absolute Magnitude</th>
          <th>Diameter(m)</th>
          <th>Is Potentially Hazardous</th>
        </tr>
      </thead>
      <tbody>
        {extractedProperties.map((property) => (
          <tr key={property.id}>
            <td>{property.name}</td>
            <td>{truncateNumber(property.missDistance, 1)}</td>
            <td>{property.absolute_magnitude_h}</td>
            <td>{truncateNumber(property.diameterMax, 4)}</td>
            <td>{property.is_potentially_hazardous_asteroid ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AsteroidsInfoTable;
