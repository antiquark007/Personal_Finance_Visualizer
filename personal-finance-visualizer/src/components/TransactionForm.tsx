import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const transactionSchema = z.object({
  amount: z.number().min(0, 'Amount must be a positive number'),
  date: z.string().nonempty('Date is required'),
  description: z.string().optional(),
});

type TransactionFormData = z.infer<typeof transactionSchema>;

interface TransactionFormProps {
  onSubmit: (data: TransactionFormData) => void;
  initialData?: TransactionFormData;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: initialData || { amount: 0, date: '', description: '' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="transaction-form">
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" {...register('amount', { valueAsNumber: true })} />
        {errors.amount && <span>{errors.amount.message}</span>}
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" {...register('date')} />
        {errors.date && <span>{errors.date.message}</span>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" {...register('description')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;