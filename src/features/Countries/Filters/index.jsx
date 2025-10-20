import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "north america", label: "North America" },
  { value: "oceania", label: "Oceania" },
  { value: "south america", label: "South America" },
];

const Filters = () => {
  const { region } = useParams();
  const navigate = useNavigate();
  const [activeRegion, setActiveRegion] = useState(region);

  // if (!options.find((opt) => opt.value === activeRegion)) {
  //   return (
  //     <div>
  //       <p>Invalid region selected.</p>
  //       <p>Please select a valid region from the dropdown menu.</p>
  //     </div>
  //   );
  // }
  return (
    <Select
      options={options}
      value={options.find((opt) => opt.value === activeRegion)}
      onChange={(opt) => {
        setActiveRegion(opt.value);
        navigate(`/countries/${opt.value}`);
      }}
      styles={{
        container: (base) => ({
          ...base,
          width: 200,
        }),
        control: (base) => ({
          ...base,
          borderRadius: 6,
          borderColor: "#ccc",
          fontSize: "1.6rem",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "#f0f8ff" : "#fff",
          color: "#333",
        }),
      }}
    />
  );
};
export default Filters;
