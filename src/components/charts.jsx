
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Job Chart',
      },
    },
  };
  
  const labels = ['Frontend', 'Backend', 'App Developer', 'Cyber Security', 'Graphic Designer', 'Game Developer ', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Active',
        // data: labels.map(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Inactive',
        // data: labels.map(),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
export default function Charts(){
    return<>
    <p className="font-bold justify-center flex text-2xl bg-light p-2">Job Data Charts</p>
    <Bar options={options} data={data} />;
    <p>Number of active jobs are {data.value}</p>
   
    </>
}

