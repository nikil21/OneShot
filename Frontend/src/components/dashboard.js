import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const data = {
  labels: ['Tamil Nadu', 'Maharashtra', 'Uttar Pradesh', 'Karnataka', 'Telangana', 'Other states' ],
  datasets: [
    {
      label: '# of Colleges',
      data: [21,8,8,7,6,50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const legendOpts = {
    onClick: (e, item) => alert(`Item with text ${item._dataIndex} and index ${item.index} clicked`),
    onHover: (e, item) => alert(`Item with text ${item.text} and index ${item.index} hovered`),
  };

const Dashboard = () => (

    
  <>
    <div className='header'>
      <h3 className='title'>Colleges distribution among states.</h3>
    </div>
    <Doughnut 
        data={data}
        options={{
            title:{
              display:true,
              text:'Colleges per state',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right',

            },
            
            onClick: function(e, item) {
             
             console.log()
             alert(`Item with text ${item.text} and index ${item.index} clicked`);

            },
            responsive:true,
            maintainAspectRatio:true,
            // defaultFontSize:"20px",
            width:"4000",
            height:"4000",
          }} />
  </>
);

export default Dashboard;

