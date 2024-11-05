import React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { category: "Laptops", total_price: 2450 },
  { category: "Phones", total_price: 2198 },
  { category: "Accessories", total_price: 210 },
  { category: "Smart Watches", total_price: 500 },
  { category: "MacBook", total_price: 3700 },
  { category: "Iphone", total_price: 1800 },
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ComposedChart
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="total_price" barSize={50} fill="#413ea0" />
    </ComposedChart>
  </ResponsiveContainer>
);

export default Chart;
