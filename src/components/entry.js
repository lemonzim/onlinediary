import './entry.css';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
export const Entry = () => {
    const [diarydata, setdiarydata] = useState([]);
    
    useEffect(() => {
        const diarydatafunction = async () => {
        try {
            const url = 'http://206.189.151.246/read-diary.php';
            const response = await fetch(`${url}`);
            const data = await response.json();
        setdiarydata(data);
         } catch (error) {
        console.error('Error fetching diary data:', error);
         }
    };
    diarydatafunction();
    }, []);

    if (!diarydata || diarydata.length === 0) {
        return <div>No diary entries found.</div>;
      }

      const formatDateTime = (datetimeString) => {
        const dateTimeParts = datetimeString.split(' ');
        const date = dateTimeParts[0];
        const time = dateTimeParts[1].slice(0, 5);
        return `${date} ${time}`;
      };

      const handleDelete = (datetimes) => {
            const confirmDelete = window.confirm('Are you sure you want to delete this diary entry?');
            if (confirmDelete) {
                const url = 'http://206.189.151.246/delete-diary.php';
    
                let fData = new FormData();
                fData.append('datetimes', datetimes);
                axios.post(url, fData)
                .then(res=> {
                    alert(res.data.message);
                    // Update the diarydata state by filtering out the deleted entry
                    setdiarydata(prevData => prevData.filter(entry => entry.datetimes !== datetimes));
                })
                .catch(err => console.log(err));
            }
        }
    return (
        <>
        <div className='backgroundcolor'><img src={logo} className="App-logo" alt="logo" /></div>
        <div className='flex'>
        {diarydata.map((diary) => (
        <header className="entry-header" key={diary.datetimes}>
                <div className="container">
                    <div className='header'>
                        <div className="date"><h1>{formatDateTime(diary.datetimes)}</h1></div>
                        <div className="title"><h2>{diary.title}</h2></div>  
                        <button className="delbutton"onClick={() => handleDelete(diary.datetimes)}>X</button>
                     </div>
                 <hr />
                    <div className="entry">{diary.entrys}</div>  
                </div>
        </header>
        
            ))}
        </div>

        </>

    );
};

export default Entry;