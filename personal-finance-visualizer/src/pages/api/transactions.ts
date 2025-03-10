// filepath: a:\vsd\project\NEXTjs\Personal_Finance_Visualizer\personal-finance-visualizer\src\pages\api\transactions.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Transaction from '@/models/Transaction';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const transactions = await Transaction.find({});
        res.status(200).json(transactions);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions' });
      }
      break;

    case 'POST':
      try {
        const { amount, date, description } = req.body;
        if (!amount || !date) {
          return res.status(400).json({ message: 'Amount and date are required' });
        }
        const transaction = new Transaction({
          amount,
          date,
          description,
        });
        await transaction.save();
        res.status(201).json(transaction);
      } catch (error) {
        res.status(400).json({ message: 'Error creating transaction' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        await Transaction.findByIdAndDelete(id);
        res.status(200).json({ message: 'Transaction deleted' });
      } catch (error) {
        res.status(400).json({ message: 'Error deleting transaction' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}