import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 400 },
  { name: 'Tue', uv: 300 },
  { name: 'Wed', uv: 500 },
  { name: 'Thu', uv: 200 },
  { name: 'Fri', uv: 600 },
];

export default function Chart() {
  return (
    <div className="w-full h-32 mt-4">
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#a855f7" strokeWidth={2} dot={false} />
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
