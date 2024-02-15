import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chip } from "@mui/material";
import { useState } from "react";

export default function StepB() {
  const [expanded, setExpanded] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState([]);
  const [selectedpreferences, setSelectedpreferences] = useState([]);
  const [selectedNutriGoals, setSelectedNutriGoals] = useState([]);
  const [selectedHealthGoals, setSelectedHealthGoals] = useState([]);
  const [selectedmealTimings, setSelectedmealTimings] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleRiskSelect = (value) => {
    if (selectedRisk.includes(value)) {
      setSelectedRisk((prev) => prev.filter((chip) => chip !== value));
    } else {
      setSelectedRisk((prev) => [...prev, value]);
    }
  };
  const handleIssueSelect = (value) => {
    if (selectedIssue.includes(value)) {
      setSelectedIssue((prev) => prev.filter((chip) => chip !== value));
    } else {
      setSelectedIssue((prev) => [...prev, value]);
    }
  };
  const handlepreferencesSelect = (value) => {
    if (selectedpreferences.includes(value)) {
      setSelectedpreferences((prev) => prev.filter((chip) => chip !== value));
    } else {
      setSelectedpreferences((prev) => [...prev, value]);
    }
  };
  const handleNutriGoalsSelect = (value) => {
    if (selectedNutriGoals.includes(value)) {
      setSelectedNutriGoals((prev) => prev.filter((chip) => chip !== value));
    } else {
      setSelectedNutriGoals((prev) => [...prev, value]);
    }
  };
  const handleHealthGoalsSelect = (value) => {
    if (selectedHealthGoals.includes(value)) {
      setSelectedHealthGoals((prev) => prev.filter((chip) => chip !== value));
    } else {
      setSelectedHealthGoals((prev) => [...prev, value]);
    }
  };
  const handlemealTimingsSelect = (value) => {
    if (selectedmealTimings.includes(value)) {
      setSelectedmealTimings((prev) => prev.filter((chip) => chip !== value));
    } else {
      setSelectedmealTimings((prev) => [...prev, value]);
    }
  };
  return (
    <div className="row mx-auto">
      <div class="accordion" id="accordionExample">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <p className="my-auto fs-16 inter-bold">
              Do you have any following risk?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row gy-3">
              {[
                "Eggs",
                "Soy",
                "Fish",
                "Gluten",
                "Stay healthy",
                "Food activities",
                "Fructose Intolerance",
                "Build muscle",
              ].map((label) => (
                <div key={label} className="col-4 mb-2">
                  <Chip
                    label={label}
                    variant={
                      selectedRisk.includes(label) ? "filled" : "outlined"
                    }
                    color="success"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRiskSelect(label)}
                  />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <p className="my-auto fs-16 inter-bold">
              Select your dietary preferences?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row gy-3">
              {[
                "Eggs",
                "Soy",
                "Fish",
                "Gluten",
                "Stay healthy",
                "Food activities",
                "Fructose Intolerance",
                "Build muscle",
              ].map((label) => (
                <div key={label} className="col-4 mb-2">
                  <Chip
                    label={label}
                    variant={
                      selectedIssue.includes(label) ? "filled" : "outlined"
                    }
                    color="success"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleIssueSelect(label)}
                  />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <p className="my-auto fs-16 inter-bold">
              Select your Nutrition Goals?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row gy-3">
              {[
                "Eggs",
                "Soy",
                "Fish",
                "Gluten",
                "Stay healthy",
                "Food activities",
                "Fructose Intolerance",
                "Build muscle",
              ].map((label) => (
                <div key={label} className="col-4 mb-2">
                  <Chip
                    label={label}
                    variant={
                      selectedNutriGoals.includes(label) ? "filled" : "outlined"
                    }
                    color="success"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleNutriGoalsSelect(label)}
                  />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <p className="my-auto fs-16 inter-bold">
              Select your Health Goals ?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row gy-3">
              {[
                "Eggs",
                "Soy",
                "Fish",
                "Gluten",
                "Stay healthy",
                "Food activities",
                "Fructose Intolerance",
                "Build muscle",
              ].map((label) => (
                <div key={label} className="col-4 mb-2">
                  <Chip
                    label={label}
                    variant={
                      selectedHealthGoals.includes(label) ? "filled" : "outlined"
                    }
                    color="success"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleHealthGoalsSelect(label)}
                  />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <p className="my-auto fs-16 inter-bold">
            Select your meal timings?            </p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row gy-3">
              {[
                "Eggs",
                "Soy",
                "Fish",
                "Gluten",
                "Stay healthy",
                "Food activities",
                "Fructose Intolerance",
                "Build muscle",
              ].map((label) => (
                <div key={label} className="col-4 mb-2">
                  <Chip
                    label={label}
                    variant={
                      selectedmealTimings.includes(label) ? "filled" : "outlined"
                    }
                    color="success"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handlemealTimingsSelect(label)}
                  />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
