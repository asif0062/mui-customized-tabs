import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabOne from "./tab-1";
import TabTwo from "./tab-2";
import TabThree from "./tab-3";

const tabs = [
  { label: "Item One", value: "1", component: <TabOne /> },
  { label: "Item Two", value: "2", component: <TabTwo /> },
  { label: "Item Three", value: "3", component: <TabThree /> },
];

const Tabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const [activeTab, setActiveTab] = useState(params.get("tab") || "1");

  const handleTabChange = (value) => {
    navigate(`?tab=${value}`);
    setActiveTab(value);
  };

  const handleNextTab = () => {
    const nextTab = String(Number(activeTab) + 1);
    if (nextTab <= tabs.length) {
      handleTabChange(nextTab);
    }
  };

  const handlePrevTab = () => {
    const prevTab = String(Number(activeTab) - 1);
    if (prevTab >= "1") {
      handleTabChange(prevTab);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      sx={{ width: "30%", mx: "auto", mt: 5 }}
    >
      <Link style={{ fontSize: "18px" }} className="App-link" to={"/"}>
        Back to Home
      </Link>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="lab API tabs example">
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                onClick={(e) => e.preventDefault()} // Disable tab clicks
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
      <button onClick={handlePrevTab} disabled={activeTab === "1"}>
        Previous
      </button>
      <button onClick={handleNextTab} disabled={activeTab === String(tabs.length)}>
        Next
      </button>
    </Box>
  );
};

export default Tabs;
