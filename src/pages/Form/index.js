import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function FormPage() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [gravadora, setGravadora] = useState("");
    const [lancamento, setLancamento] = useState("");

    // useEffect(() => {
    //     handleGet();
    // }, [id]);

    // const handleGet = useCallback(async() => {
    //     const res = await axios.get(`https://dummyjson.com/products/${id}`);
    //     setName(res.data.title);
    // }, [id]);

    const handlePost = (async () => {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: titulo,
            autor: autor,
            gravadora: gravadora,
            lancamento: lancamento,
        });
        console.log(res);
    })

    return (
        <div className={styles.center}>
            <form className={styles.styled__form}>
                <input type='text' onChange={(e) => setTitulo(e.target.value)} placeholder='Título'></input>
                <input type='text' onChange={(e) => setAutor(e.target.value)} placeholder='Nome do autor'></input>
                <input type='text' onChange={(e) => setGravadora(e.target.value)} placeholder='Nome da Gravadora'></input>
                <input type='date' onChange={(e) => setLancamento(e.target.value)} placeholder='Ano de Lançamento'></input>
                <Button onClick={handlePost}>Enviar</Button>
            </form>
        </div>
    )
}