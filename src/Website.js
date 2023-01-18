import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export function Website() {
    const { url } = useParams();
    const [longurl, setlongurl] = useState("");
    const getUrl = async () => {
        const dt = await fetch(`http://localhost:4000/${url}`);
        const val = await dt.json()
        setlongurl(val.longurl)
    };
    useEffect(() => getUrl, []);
    window.location.href = longurl;
    console.log(longurl);
    console.log(url);
    return (

        <div className="loding">
            <h1><HourglassEmptyIcon /></h1>
        </div>
    );
}
