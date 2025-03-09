import React, { useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Chart from '../components/Chart';
import useTransactions from '../hooks/useTransactions';

const Home: React.FC = () => {
  const { transactions, fetchTransactions, addTransaction } = useTransactions();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleAddTransaction = (data: { amount: number; date: string; description?: string }) => {
    addTransaction(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Visualizer</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionList />
      <Chart />
    </div>
  );
};

export default Home;