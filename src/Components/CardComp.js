import react, { useEffect, useState } from 'react'
import { Card, Input } from '@material-ui/core';
const axios = require('axios')


const CardComp = () => {
  const [city, setCity] = useState('');

  const [temp, settemp] = useState(0);
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(0);

  const [found, setfound] = useState(false);

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f84a4ee08ab668050b201025c52e69c3`

  console.log(process.env);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setfound(true);
        settemp(response.data.main.temp);
        setmin(response.data.main.temp_min);
        setmax(response.data.main.temp_max);
      }).catch((err) => {
        setfound(false);
        console.log('some error occured');
      })
  }, [city])

  if (found) {
    return (
      <div>
        <div style={{ fontSize: "24px", paddingBottom: "10px" }}>Weather Application</div>
        <Card style={{ width: "500px", height: "300px", backgroundColor: "#ccd5eb", padding: "10px" }}>
          <Input style={{ backgroundColor: "white", borderRadius: "6px" }} value={city} onChange={(event) => { setCity(event.target.value); }} />
          <div style={{ fontSize: "30px" }}>
            {city}
          </div>
          <div style={{ fontSize: "30px", paddingTop: "20px" }}>
            Temperature is {temp} &#8451;
          </div>
          <div style={{ fontSize: "20px", paddingTop: "20px" }}>
            Minimum Temp: {min} &#8451;
          </div>
          <div style={{ fontSize: "20px", paddingTop: "20px" }}>
            Maximum Temp: {max} &#8451;
          </div>
        </Card>
      </div>
    )
  } else {
    return (
      <div>
        <div style={{ fontSize: "24px", paddingBottom: "10px" }}>Weather Application</div>
        <Card style={{ width: "500px", height: "300px", backgroundColor: "#ccd5eb", padding: "10px" }}>
          <Input style={{ backgroundColor: "white", borderRadius: "6px" }} value={city} onChange={(event) => { setCity(event.target.value); }} />
          <div style={{ fontSize: "30px" }}>
            No city found
          </div>
        </Card>
      </div>
    )
  }
}

export default CardComp;