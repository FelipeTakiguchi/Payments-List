import { useState, useContext } from "react"
import { PagamentosContext } from "../../context/Pagamentos"
import styles from "./styles.module.scss"

export default function AddPagamento() {
    const { payBills } = useContext(PagamentosContext)
    const [carteira, setCarteira] = useState("");
    const [data, setData] = useState("");
    const [valor, setValor] = useState(0.0);

    return (
        <>
            <div className={styles.container}>
                <h1>Novo Pagamento</h1>
                <form>
                    <input type="text" onChange={(e) => setCarteira(e.target.value)} placeholder="Insira o nome da carteira"></input>
                    <input type="date" onChange={(e) => setData(e.target.value)} placeholder="Insira a data"></input>
                    <input type="number" onChange={(e) => setValor(e.target.value)} placeholder="Insira o valor"></input>
                </form>
                <button className={styles.btn__pagamento} onClick={() => payBills(carteira, data, valor)}>Pagar</button>
            </div>
        </>
    )
}