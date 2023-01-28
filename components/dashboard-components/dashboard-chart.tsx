import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DashboardChart = () => {
  return (
    <div className="bg-card rounded hidden md:block h-full flex-1 self-start md:mx-1 p-2 ">
      <div className="mb-4">
        <h3 className="font-sec font-bold text-paper text-lg">Trade Summary</h3>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0f172a" stopOpacity={1} />
                <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#99f6e4"
              strokeWidth={3}
              fill="url(#colorPv)"
            />
            <XAxis />
            <YAxis axisLine={false} />
            <CartesianGrid vertical={false} horizontal={false} opacity={0.4} />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
