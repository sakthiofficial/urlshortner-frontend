import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export function Sample() {
    const { url } = useParams();
    const [longurl, setlongurl] = useState("");
    const getUrl = async () => {
        const dt = await fetch(`http://localhost:4000/${url}`);
        const val = await dt.json()
        window.location.href = val.longurl;
        console.log("Api call going");

    };
    useEffect(() => {
        getUrl()
    }, []);
    console.log(url, "Iam ruuning");

    return (

        <div className="loding">
            <h1><HourglassEmptyIcon /></h1>
        </div>
    );
}
