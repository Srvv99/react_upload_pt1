
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart,Bar,Legend } from 'recharts';
import "./analytics.css";


const Analytics=()=>{

  const pdata = [
    {
      name: 'MongoDb',
      student: 1100,
      fees: 600
    },
    {
      name: 'Javascript',
      student: 350,
      fees: 1500
    },
    {
      name: 'PHP',
      student: 400,
      fees: 700
    },
    {
      name: 'Java',
      student: 1000,
      fees: 500
    },
    {
      name: 'C#',
      student: 900,
      fees: 400
    },
    {
      name: 'C++',
      student: 100,
      fees: 800
    },
  ];

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


return(

  <>

  <div className="analytics">

    {/* creating charts */}


    <div className="chart">
          <h3 className="chart_title"> Line Chart</h3>
          <ResponsiveContainer width="80%" aspect={4 / 1}>
            <LineChart data={pdata}>

              <Line dataKey="student"/>
              <Line dataKey="fees" />
              <XAxis dataKey="name" interval={"pireserveStartEnd"} stroke="#5550bd" />
              <YAxis type="number" domain={[0, 2000]} />
              <Tooltip />
              <CartesianGrid />


            </LineChart >



          </ResponsiveContainer>
          </div>

          <div className="barchart">
          <h3 className="chart_title">Bar chart</h3>
          <ResponsiveContainer width="80%" aspect={4 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>


        </div>


        
        </div>
  
  </>
)
}


export default Analytics;