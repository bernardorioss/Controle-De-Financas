import React, { useState, useEffect} from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";
import GlobalStyle from "./styles/global";

const App = () => {
    const data = localStorage.getItem("transactions"); // pegar os itens no localstorage
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : [] // verifica se tem algum item no localstorage, se existir ele vai parsear o JSON e vai retornar o valor, se nao ele retorna vazio
      );
      const [income, setIncome] = useState(0); // as entradas
      const [expense, setExpense] = useState(0); // as saidas
      const [total, setTotal] = useState(0); // total

      useEffect(() => {
        const amountExpense = transactionsList
          .filter((item) => item.expense) // vai pegar os itens da lista e filtrar aqueles que tem expense true
          .map((transaction) => Number(transaction.amount)); // aqui ele pega o valor somente das saidas os amount
    
        const amountIncome = transactionsList
          .filter((item) => !item.expense) // vai pegar os itens de entrada, no caso que sao diferente de expense que sao as saidas
          .map((transaction) => Number(transaction.amount));
    
        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); // pegar a soma das saidas
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); // somas das entradas
    
        const total = Math.abs(income - expense).toFixed(2); // aredondando com o Math. abs o total senod um menos o outro
    
        setIncome(`R$ ${income}`); // atualizando 
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`); // fazend a condicao se ficar negativo, se ele for menor vai aparecer um - ao lado no numero.
      }, [transactionsList]); // dependencia o transactionsList. quer dizer que quando terminar, ele fara novamente

    return( 
    <>
    <Header />
    <Resume income={income} expense={expense} total={total} />
    <Form />
    <GlobalStyle />
    </>
    );
}

export default App;