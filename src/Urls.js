import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { port } from './port';
export function Urls({ prop, getUrl }) {
    const { longurl, shorturl } = prop
    async function deleteUrl(url) {
        const data = await fetch(`${port}deleteurl`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: "sakthi", longurl: url })
        }).then(val => {
            if (val.status == 200) {
                getUrl()
            } else {
                alert("Sorry Somethimg Wrong")
            }
        })
    }
    return (
        <div className="urlshortner_urls">
            <div className="content">
                <div className="short_url">
                    <p>Shorted Url</p>
                    <a href={shorturl} target="_blank" rel="noopener noreferrer">https://master--resonant-cannoli-ac3ee3.netlify.app/{shorturl}</a><br />

                </div>
                <div className="long_url">

                    <p>Your Url </p>
                    <a href={longurl} target="_blank" rel="noopener noreferrer">{longurl}</a>
                </div>
            </div>
            <div className="btn">

                <DeleteIcon color="error" style={{ cursor: "pointer", color: "#e53935b3" }} onClick={() => deleteUrl(longurl)} />

            </div>

        </div>
    );
}
