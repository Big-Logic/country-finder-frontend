import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #f8f8f8;
  font-size: 1rem;
  color: #333;
  outline: none;
  min-width: 150px;
  transition: border 0.2s;
  &:focus {
    border-color: #007bff;
  }
`;

const Filters = () => {
  const { region } = useParams();
  const navigate = useNavigate();
  const [activeRegion, setActiveRegion] = useState(region);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    navigate(`/countries/${activeRegion}`);
  }, [activeRegion, navigate]);

  return (
    <div>
      <form>
        <StyledSelect
          name="regions"
          value={activeRegion}
          onChange={(e) => {
            const selectedRegion = e.target.value;
            setActiveRegion(selectedRegion);
          }}
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="north america">North America</option>
          <option value="oceania">Oceania</option>
          <option value="south america">South America</option>
        </StyledSelect>
      </form>
    </div>
  );
};

// const SelectWrapper = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 220px;
// `;

// const StyledSelect = styled.select`
//   width: 100%;
//   padding: 0.75rem 2.5rem 0.75rem 1rem;
//   border-radius: 6px;
//   border: 1px solid #ccc;
//   background: #f8f8f8;
//   font-size: 1rem;
//   color: #333;
//   outline: none;
//   appearance: none;
//   transition: border 0.2s;
//   cursor: pointer;
//   &:focus {
//     border-color: #007bff;
//   }
// `;

// const Arrow = styled.span`
//   position: absolute;
//   right: 1rem;
//   top: 50%;
//   transform: translateY(-50%);
//   pointer-events: none;
//   font-size: 1.2rem;
//   color: #888;
// `;

// // ...existing code...
// const Filters = () => {
//   const { region } = useParams();
//   const navigate = useNavigate();
//   const [activeRegion, setActiveRegion] = useState(region);
//   const isFirstRender = useRef(true);

//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       return;
//     }
//     navigate(`/countries/${activeRegion}`);
//   }, [activeRegion, navigate]);
//   return (
//     <div>
//       <form>
//         <SelectWrapper>
//           <StyledSelect
//             name="regions"
//             value={activeRegion}
//             onChange={(e) => {
//               const selectedRegion = e.target.value;
//               setActiveRegion(selectedRegion);
//             }}
//           >
//             <option value="all">All</option>
//             <option value="africa">Africa</option>
//             <option value="asia">Asia</option>
//             <option value="europe">Europe</option>
//             <option value="north america">North America</option>
//             <option value="oceania">Oceania</option>
//             <option value="south america">South America</option>
//           </StyledSelect>
//           <Arrow>▼</Arrow>
//         </SelectWrapper>
//       </form>
//     </div>
//   );
// };

export default Filters;
