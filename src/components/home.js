import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
export const Home = () => {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [date, setDate] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Format the date for the datetime-local input
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    // Set the date state to today's date
    setDate(formattedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
      if(title.length === 0)
        {alert('Please enter a title');}
      else if(date.length === 0)
        {alert('Please enter the date');}
      else if(entry.length === 0)
        {alert('Please enter an entry');}
      else{
        const url = 'http://206.189.151.246/create-diary.php';
  
        let fData = new FormData();
        fData.append('title', title);
        fData.append('entry', entry);
        fData.append('date', date);
  
        axios.post(url, fData)
        .then(res=> {
            alert("New diary entry created!");
            setRefresh(true);
        })
        .catch(err => console.log(err));
      }
    };

    useEffect(() => {
        if (refresh) {
          setTitle('');
          setEntry('');
          setDate('');
          setRefresh(false); 
        }
      }, [title, entry, date, refresh]);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form name="diary" onSubmit={handleSubmit}>
          <label>What Happened Today?</label>
            <div className="diary-top">
              <input type="text" name="title" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value )}/>
              <input type='datetime-local' name='date' value={date} onChange={(e) => setDate(e.target.value)}/>
            </div><br></br>
            <textarea name='entry' placeholder='Enter Entry' value={entry} onChange={(e) => setEntry(e.target.value )}/><br></br>
            <button name="submit" type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
};

export default Home;