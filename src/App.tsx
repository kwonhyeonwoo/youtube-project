import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    title:'',
    description:'',
    hashtags:''
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = event.target;
    if(name === 'title'){
      setData(current => ({
        ...current,
        title: value
      }));
    }
    if (name === 'description') {
      setData(current => ({
        ...current,
        description: value
      }));
    }
    if (name === 'hashtags') {
      setData(current => ({
        ...current,
        hashtags: value
      }));
    }
  }
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/videos/upload', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('responseData', responseData);
    } catch (error) {
      console.error('Error during fetching:', error);
    }
  };
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('http://localhost:4000/videos/upload', {
          method: "GET",
          headers: {
            "Content-Type": "applicaation/json"
          }
        })
        const responseData = await response.json();
        console.log('responseData', responseData);
      }catch(e){
        console.log(e);
      }
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={data.title} name='title' />
        <input type="text" onChange={onChange} name='description' />
        <input type="text" onChange={onChange} name='hashtags' />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
