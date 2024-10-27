import { Grid2, Paper, styled } from "@mui/material";
import { LineChart, PieChart } from "@mui/x-charts";
import { BarChart } from '@mui/x-charts/BarChart';
import { DashboardHeader } from "../../../components/DashboardHeader/DashboardHeader";

const Item = styled(Paper)(({ theme }) => ({
    justifyContent: "center",
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function DashboardPage() {
    return (
        <>
            <DashboardHeader title="Dashboard" />

            <Grid2 container spacing={2}>
                <Grid2 size={8}>
                    <Item>
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            height={300}
                        />
                    </Item>
                </Grid2>
                <Grid2 size={4}>
                    <Item>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'group D'] }]}
                            series={[{ data: [4, 3, 5, 10] }, { data: [1, 6, 3, 1] }, { data: [2, 5, 6, 7] }]}
                            height={300}
                        />
                    </Item>
                </Grid2>
                <Grid2 size={4}>
                    <Item>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Item>
                </Grid2>
                <Grid2 size={4}>
                    <Item>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Item>
                </Grid2>
                <Grid2 size={4}>
                    <Item>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Item>
                </Grid2>
            </Grid2>
        </>
    )
}