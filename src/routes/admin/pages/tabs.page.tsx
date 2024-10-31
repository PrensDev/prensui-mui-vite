import { Box, Button, Stack, Tab, Tabs } from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";
import { DashboardHeader } from "../../../components/DashboardHeader/DashboardHeader";
import InfoIcon from '@mui/icons-material/Info';

interface TabContentProps {
  children?: ReactNode;
  activeTab: string;
  value: string;
}

const TabContent = ({ 
  children,
  activeTab,
  value
}: Readonly<TabContentProps>) => {
  return (
    <Box role="tabpanel">
      {activeTab === value && (
        <Box p={3}>{children}</Box>
      )}
    </Box>
  )
}


export default function TabsPage() {
  const [selectedTab, setSelectedTab] = useState("1")

  const onTabSelect = (_: SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  }

  return (
    <>
      <DashboardHeader
        title="Tabs"
      />

      <Box>
        <Tabs value={selectedTab} onChange={onTabSelect}>
          <Tab value="0" icon={<InfoIcon />} label="Info" iconPosition="end"/>
          <Tab value="1" label="Report Data Period" />
          <Tab value="2" label="Select Employees" />
          <Tab value="3" label="Additional Selections" />
          <Tab value="4" label="Run the Report" />
          <Tab value="5" label="Inactive" disabled />
        </Tabs>

        <TabContent value="0" activeTab={selectedTab}>
          Info
        </TabContent>
        <TabContent value="1" activeTab={selectedTab}>
          Report Data Period
        </TabContent>
        <TabContent value="2" activeTab={selectedTab}>
          Select Employees
        </TabContent>
        <TabContent value="3" activeTab={selectedTab}>
          Additional Selections
        </TabContent>
        <TabContent value="4" activeTab={selectedTab}>
          <Stack direction="row" gap={1}>
            <Button variant="contained">Execute Report in Foreground</Button>
            <Button variant="contained">Execute Report in Background (Immediately)</Button>
            <Button variant="contained">Execute Report in Background (Schedule)</Button>
          </Stack>
        </TabContent>
      </Box>
    </>
  )
}