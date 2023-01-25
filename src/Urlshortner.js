import TextField from '@mui/material/TextField';
import { Urls } from './Urls';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { port } from './port';
import RotateRightIcon from '@mui/icons-material/RotateRight';


export function Urlshortner() {

    const [input, setinput] = useState(true)
    const [btn, setbtn] = useState(false)
    const [url, seturl] = useState([])

    const getUrl = async () => {

        const data = await fetch(`${port}all/urls`).then(val => val.json()).then(dt => seturl(dt))
    }

    useEffect(() => {
        getUrl()
    }, [])


    const submitUrl = async (e) => {
        setbtn(true)
        e.preventDefault()
        if (e.target[0].value.length <= 8) {
            setinput(false)
            setbtn(false)

            return;
        }

        const data = await fetch(`${port}shorturl`, {
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
            setbtn(false)

        } else {
            setinput(false)
            setbtn(false)

        }
    }
    return (
        <div className="main">
            <div className='nav-bar'>
                <img src="./logo.png" alt="" />

            </div>
            <div className="urlshortner">
                <form onSubmit={(e) => submitUrl(e)}>
                    <TextField id="outlined-basic" color={input ? "primary" : "error"} label={input ? "Paste your url here" : "Something Wrong"} variant="outlined" />
                    <Button type="submit" variant="contained">{btn ? <RotateRightIcon className='btn-spiner' /> : "Submit"} </Button>
                </form>
                <div className="allurl">

                    {url.map(val => <Urls prop={val} getUrl={getUrl} />)}
                </div>




            </div>
        </div>
    );
}
