import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
<<<<<<< HEAD

const data = [
  { value: 5, label: 'calories' },
  { value: 10, label: 'Remaining ' },

=======
import CalorieIntake from './page';

const data = [
  { value: 5, label: 'Protien' },
  { value: 10, label: 'Fats' },
  { value: 15, label: 'Carbs' },
//   { value: 20, label: 'Calories' },
>>>>>>> 8141dc27ba8a35a4cd9812fb98acce3f781462c7
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
<<<<<<< HEAD
      <PieCenterLabel></PieCenterLabel>
    </PieChart>
  );
}


=======
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
  );
}
>>>>>>> 8141dc27ba8a35a4cd9812fb98acce3f781462c7
