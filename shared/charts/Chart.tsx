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
import { useContext, useState } from "react";
import Loading from "../loading/Loading";
import { UserContext } from "../../context/UserContext";

const Chart = () => {
  const { coin: selected, setCoin }: any = useContext(UserContext);

  const { coin, loading } = useFetchAllCoin(selected, 30);

  return (
    <div className="p-4 bg-card rounded flex-1 items-stretch">
      {/* selector */}
      <div className="mb-8 flex items-center justify-between">
        <div className="bg-bg py-1 px-2 rounded focus:border-paper focus:border-[1px]">
          <select
            className="bg-bg focus:outline-none font-sec text-sm font-bold"
            value={selected}
            onChange={(e) => setCoin(e.target.value)}
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="tether">USDT</option>
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
            <option value="tron">Tron</option>
          </select>
        </div>
        <div className="text-paper font-sec border-paper border-[1px] px-2 rounded cursor-pointer">
          1 Month
        </div>
      </div>
      {/* chart */}
      <div className="h-[300px] w-full">
        {loading && <Loading />}
        {!loading && (
          <ResponsiveContainer height={"100%"} width="100%">
            <AreaChart data={coin}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0f172a" stopOpacity={1} />
                  <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tickCount={4} />
              <YAxis dataKey="price" axisLine={false} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#99f6e4"
                strokeWidth={3}
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
