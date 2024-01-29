import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [keyword] = useSearchParams('');
    const [search, setSearch] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/videos/search?${keyword}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const responseData = await response.json();
            setSearch(responseData);
            console.log('response', responseData);
        }
        fetchData();
    }, [keyword])

    console.log('dddd', search)
    return (
        <div>
            <form method='GET' >
                <input type="text" name='keyword' placeholder="search" />
                <button >Search</button>
            </form>
            {/* {search && <div>{search}</div>} */}
        </div>
    )
}
export default Search;