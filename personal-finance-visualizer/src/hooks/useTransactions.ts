// filepath: a:\vsd\project\NEXTjs\Personal_Finance_Visualizer\personal-finance-visualizer\src\hooks\useTransactions.ts
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Transaction } from '../types';

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }, []);

  const addTransaction = useCallback(async (data: { amount: number; date: string; description?: string }) => {
    try {
      const response = await axios.post('/api/transactions', data);
      setTransactions((prevTransactions) => [...prevTransactions, response.data]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  }, []);

  const deleteTransaction = useCallback(async (id: string) => {
    try {
      await axios.delete('/api/transactions', { data: { id } });
      setTransactions((prevTransactions) => prevTransactions.filter(transaction => transaction.id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return {
    transactions,
    fetchTransactions,
    addTransaction,
    deleteTransaction,
  };
};

export default useTransactions;