import { useContext } from "react"
import { PagamentosContext } from "../../context/Pagamentos"
import styles from './styles.module.scss'

export default function Historico() {
    const { pagamentos } = useContext(PagamentosContext)

    return (
        <div className={styles.App}>
            <table>
                <tr>
                    <th>Carteira</th>
                    <th>Data</th>
                    <th>Valor</th>
                </tr>
                {
                    pagamentos.map(pagamento => {
                        return (
                            <tr>
                                <td>{pagamento.carteira}</td>
                                <td>{pagamento.data}</td>
                                <td>{pagamento.valor}</td>
                            </tr>
                        )
                    }
                    )}
            </table>
        </div>
    )
}