// src/components/EventGenresChart.js

import { useState, useEffect } from 'react';
import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const EventGenresChart = ({events}) => {
    const [data, setData] = useState({}); 

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    const getData = () => {
        const data = genres.map(genre => {
          const filteredEvents = events.filter(event => event.summary.includes(genre));
          return { 
            name: genre,
            value: filteredEvents.length
          };
        })
        return data;
      };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
            <text
            x={x}
            y={y}
            fill="#19747e"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    useEffect(() => {
        setData(getData());
      }, [`${events}`]);

      return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              fill="#d1e8e2"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}  
              stroke="#19747e"         
            />
          </PieChart>
        </ResponsiveContainer>
      );

}

export default EventGenresChart;