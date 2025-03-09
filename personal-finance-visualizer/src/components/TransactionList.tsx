import React from 'react';
import useTransactions from '../hooks/useTransactions';
import { Transaction } from '../types';

const TransactionList: React.FC = () => {
    const { transactions, deleteTransaction } = useTransactions();

    return (
        <div className="transaction-list">
            <h2>Transaction List</h2>
            {transactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <ul>
                    {transactions.map((transaction: Transaction) => (
                        <li key={transaction.id} className="transaction-item">
                            <span>{transaction.description}</span>
                            <span>{transaction.amount}</span>
                            <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TransactionList;