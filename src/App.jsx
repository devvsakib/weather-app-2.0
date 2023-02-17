import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PreviousData from './component/PreviousData';
import Box from './component/Box';
import ConditionImage from './component/ConditionImage';

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState('');
  const [weatherCond, setWeatherCond] = useState('sunny');
  const key = "ed7de185ec164322911175016231602",
    url = "https://api.weatherapi.com/v1/current.json?key=" + key + `&q=${value ? value : "Sylhet"}`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        let data = response.data;
        setData(data);
        setWeatherCond(data.current.condition.text.toLowerCase())
      })
      .catch(err => {
        console.error(err);
      });
  }, [value]);

  return (
    <div className="App h-[88vh]">
      <div className='p-2'>
        <input type="text"
          className="outline-none px-4 py-3 rounded-md"
          placeholder='Search...'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div className='rounded-lg p-5 grid gap-5 grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 '>
          <div className='flex gap-3 p-4 rounded justify-between'>
            <div>
              <div className=''>
                <h2 className='font-semibold text-3xl'>{data?.location?.name}</h2>
                <div className='flex gap-4 mb-5 text-sm'>
                  <p>{data?.location?.country}</p>
                  <p>{data?.location?.tz_id}</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <h2 className='text-6xl text-white font-bold mb-2'>{data?.current?.temp_c}C</h2>
                <h2>{data?.current?.temp_f}F</h2>
              </div>
              <h2>{data?.location?.localtime}</h2>
            </div>
            <ConditionImage text={weatherCond} />
          </div>
          <div className='grid gap-4 grid-cols-2 md:grid-cols-4'>
            <Box titleName={"UV"} detailValue={data?.current?.uv} />
            <Box titleName={"Condition"} detailValue={data?.current?.condition.text} />
            <Box titleName={"Wind"} detailValue={data?.current?.wind_kph} />
            <Box titleName={"Pressure"} detailValue={data?.current?.pressure_mb} />
            <Box titleName={"Humidity"} detailValue={data?.current?.humidity} />
            <Box titleName={"Cloud"} detailValue={data?.current?.cloud} />
          </div>
        </div>
        <div className='overflow-hidden bg-blue-400/10 p-5 h-[80vh]'>
          <h2 className='mb-5'>Previous Forcast</h2>
          <div className=' overflow-x-scroll h-[100%]'>
            <PreviousData />
            <PreviousData source={'cloud.svg'} condition={"rainy"} />
            <PreviousData />
            <PreviousData />
            <PreviousData source={'cloud.svg'} condition={"rainy"} />
            <PreviousData />
            <PreviousData source={'cloud.svg'} condition={"rainy"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App