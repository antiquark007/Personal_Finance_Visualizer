import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import useTransactions from '../hooks/useTransactions';

const Chart: React.FC = () => {
    const { transactions } = useTransactions();

    const monthlyData = transactions.reduce((acc, transaction) => {
        const month = new Date(transaction.date).toLocaleString('default', { month: 'long' });
        const amount = transaction.amount;

        if (!acc[month]) {
            acc[month] = { month, total: 0 };
        }
        acc[month].total += amount;

        return acc;
    }, {} as { [key: string]: { month: string; total: number } });

    const data = Object.values(monthlyData);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;