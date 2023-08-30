import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const PagamentosContext = React.createContext();
PagamentosContext.displayName = 'Pagamentos';

export const PagamentoProvider = ({ children }) => {
    const [carteira, setCarteira] = useState("");
    const [data, setData] = useState("");
    const [valor, setValor] = useState(0.0);
    const [pagamentos, setPagamentos] = useState([{carteira: "aaa", data: "aaaa", valor: 0.0}]);
    const navigate = useNavigate();

    function payBills(carteira, data, valor){
        if(!carteira || !data || !valor){
            return null;
        }

        setCarteira(carteira);
        setData(data);
        setValor(valor);
        var temp = pagamentos;
        temp.push({carteira, data, valor});

        setPagamentos(temp)
        navigate("/");
    }
 
    return(
        <PagamentosContext.Provider
            value={{
                carteira,
                data,
                valor,
                pagamentos,
                setCarteira,
                setData,
                setValor,
                payBills
            }}
        >
            {children}
        </PagamentosContext.Provider>
    )
}