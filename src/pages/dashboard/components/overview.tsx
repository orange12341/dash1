import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'June',
    total: 2129,
  },
  
  {
    name: 'July',
    total: 1686,
  },
  {
    name: 'Aug',
    total: 2029,
  },
  {
    name: 'Sept',
    total: 1691,
  },
  {
    name: 'Oct',
    total: 982,
  },
  {
    name: 'Nov',
    total: 866,
  },
  {
    name: 'Dec',
    total: 2932,
  },
  {
    name: 'Jan',
    total: 780,
  },
  {
    name: 'Feb',
    total: 2594,
  },
  {
    name: 'March',
    total: 1290,
  },
  {
    name: 'April',
    total: 0,
  },
 
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
