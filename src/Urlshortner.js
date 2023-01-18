import TextField from '@mui/material/TextField';
import { Urls } from './Urls';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
export function Urlshortner() {

    const [input, setinput] = useState(true)
    const [url, seturl] = useState([])

    const getUrl = async () => {

        const data = await fetch("http://localhost:4000/all/urls").then(val => val.json()).then(dt => seturl(dt))
    }

    useEffect(() => {
        getUrl()
    }, [])


    const submitUrl = async (e) => {
        e.preventDefault()

        const data = await fetch("http://localhost:4000/shorturl", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: "sakthi", url: e.target[0].value })
        })
        if (data.status == 200) {
            const { shorted } = await data.json();
            setinput(true)
            getUrl()
            e.target[0].value = ""

        } else {
            setinput(false)
        }
    }
    return (
        <div className="main">
            <div className='nav-bar'>
                <img src="./logo.png" alt="" />

            </div>
            <div className="urlshortner">
                <form onSubmit={(e) => submitUrl(e)}>
                    <TextField id="outlined-basic" color={input ? "primary" : "error"} label={input ? "Paste your url here" : "Already Shorted Url"} variant="outlined" />
                    <Button type="submit" variant="contained">Submit </Button>
                </form>
                <div className="allurl">

                    {url.map(val => <Urls prop={val} getUrl={getUrl} />)}
                </div>




            </div>
        </div>
    );
}
