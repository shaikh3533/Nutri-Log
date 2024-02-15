import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const PrettoSlider = styled(Slider)({
  color: "#1db790",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-markLabel": {
    fontSize: "10px",
    fontWeight: "bold",
    textShadow: "0px 1px 1px grey",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#1db790",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const marks = [
  {
    value: 25,
    label: "Lightly active",
  },
  {
    value: 50,
    label: "Moderately active",
  },
  {
    value: 75,
    label: "Very active",
  },
  {
    value: 100,
    label: "Extreme active",
  },
];

export default function StepA() {
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [selectedValue, setSelectedValue] = useState(0);

  const handleHeightChange = (e) => {
    const value = e.target.value;
    setHeightCm(value);

    const cm = parseFloat(value);
    const feet = Math.floor(cm * 0.0328084);
    const inches = Math.round((cm * 0.0328084 - feet) * 12);
    setHeightFt(feet);
    setHeightInches(inches);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleHeightUnitChange = (e) => {
    setHeightUnit(e.target.value);
  };

  const GeneratedText = () => {
    if (selectedValue === 25)
      return "Light exercise a few times a week, like daily walks and casual biking, along with light household chores.";
    else if (selectedValue === 50)
      return "Regular exercise or sports multiple times weekly, including gym workouts, jogging, and participation in recreational sports.";
    else if (selectedValue === 75)
      return "High-intensity exercise almost daily, involving competitive sports or demanding workouts, possibly complemented by a physically demanding job.";
    else if (selectedValue === 100)
      return "Extremely high levels of physical activity, combining intense daily training with a demanding job, exemplified by professional athletes or those engaged in rigorous physical professions.";
    else return "Select your activity level from above range.";
  };

  return (
    <div className="row mx-auto">
      <div className="col-md-6 mb-5">
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          className="w-100 form-control"
        />
      </div>
      <div className="col-md-6 mb-5">
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          className="w-100 form-control"
        />
      </div>
      <div className="col-md-6 mb-5">
        <select class="form-select" aria-label="Default select example">
          <option selected>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="col-md-6 mb-5">
        <input
          type="date"
          id="dob"
          placeholder="Date of Birth"
          className="w-100 form-control"
        />
      </div>
      <div className="col-md-6 mb-5">
        <div className="input-group">
          <input
            type="number"
            className="form-control w-50 me-3"
            id="weight"
            placeholder={`Weight in ${unit}`}
            value={weight}
            onChange={handleWeightChange}
          />
          <select
            className="form-select"
            id="unit"
            value={unit}
            onChange={handleUnitChange}
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="input-group">
          <input
            type="number"
            className="form-control w-50 me-3"
            id="height"
            placeholder={`Height in ${heightUnit}`}
            value={heightCm}
            onChange={handleHeightChange}
          />
          <select
            className="form-select"
            id="unit"
            value={heightUnit}
            onChange={handleHeightUnitChange}
          >
            <option value="cm">cm</option>
            <option value="inci">Inci</option>
          </select>
        </div>
      </div>
      <div className="col-12 mb-3">
        <p className="text-center fs-16 fw-bold">Select Activity Level</p>
        <div className="row mb-2">
          <button className="btn btn-outline-primry col-4 col-md-2">
            Resting
          </button>
          <button className="btn btn-outline-primry col-4 col-md-2 ms-auto">
            Heavy
          </button>
        </div>
        <div className="col-11 mx-auto my-4">
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={0}
            marks={marks}
            step={null}
            value={selectedValue}
            onChange={(e, value) => setSelectedValue(value)}
          />
        </div>
      </div>
      <div className="col-12 mb-5 h-13">
        <p className="text-center fs-22 inter-bold text-primry">
          Activity Description
        </p>
        <p className="fs-18 inter-400 text-dark">
          <GeneratedText />
        </p>
      </div>
    </div>
  );
}
