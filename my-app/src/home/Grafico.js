import Chart from "react-google-charts"

function Grafico() {
  return (
    <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
        width={'700px'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Mes', 'Sales'],
          ['Janeiro', 5000],
          ['Fevereiro', 2500],
          ['Março', 1500],
          ['Abril', 1000],
        ]}
        options={{
          // Material design options
          chart: {
            title: 'Ganho mensal',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Janeiro', 50],
          ['Fevereiro', 25],
          ['Março', 15],
          ['Abril', 10],
        ]}
        options={{
          title: 'Ganho mensal',
          // Just add this option
          pieHole: 0.4,
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    </div>
  );
}

export default Grafico