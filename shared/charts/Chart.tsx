import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFetchAllCoin } from "../../hooks/useFetchCoin";
import { useState } from "react";
import Loading from "../loading/Loading";

const Chart = () => {
  const [selected, setSelected] = useState("bitcoin");

  const { coin, error, loading } = useFetchAllCoin(selected, "7");

  return (
    <div className="p-2 bg-white rounded flex-1">
      {/* selector */}
      <div className="mb-8 flex items-center justify-between">
        <div className="bg-neutral-50 py-1 px-2 rounded focus:border-paper focus:border-[1px]">
          <select
            className="bg-transparent focus:outline-none font-sec text-sm font-bold"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="tether">USDT</option>
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
            <option value="tron">Tron</option>
          </select>
        </div>
        <div className="text-paper font-sec border-paper border-[1px] px-2 rounded cursor-pointer">
          1 week
        </div>
      </div>
      {/* chart */}
      <div className="h-[300px] w-full">
        {loading && <Loading />}
        {!loading && (
          <ResponsiveContainer height={"100%"} width="100%">
            <AreaChart
              data={coin}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06254b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06254b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tickCount={4} />
              <YAxis dataKey="price" axisLine={false} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#06254b"
                fill="url(#colorPv)"
              />
              <CartesianGrid vertical={false} opacity={0.4} />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Chart;
