import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function ReqPage() {
    const [name, setName] = useState("");
    const [id, setId] = useState(1);

    useEffect(() => {
        handleGet();
    }, [id]);

    const handleGet = useCallback(async() => {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setName(res.data.title);
    }, [id]);

    const handlePost = useCallback(async () => {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: "Criando com axios",
            content: "Algum conteúdo"
        });
        console.log(res);
    }, [])

    return (
        <>
            {name}
            <Button onClick={handlePost}>Enviar</Button>
        </>
    )
}