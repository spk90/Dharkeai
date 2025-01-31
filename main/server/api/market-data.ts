import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const router = express.Router();

interface StockData {
  symbol: string;
  ltp: string;
  change: string;
  percentChange: string;
  open: string;
  high: string;
  low: string;
  quantity: string;
  turnover: string;
}

router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    // Fetch the webpage
    const response = await axios.get('https://www.sharesansar.com/live-trading', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    // Load the HTML content
    const $ = cheerio.load(response.data);
    const stocks = [] as StockData[];

    // Find the table and extract data
    $('.table-responsive table tbody tr').each((_, row) => {
      const columns = $(row).find('td');
      
      if (columns.length > 0) {
        stocks.push({
          symbol: $(columns[1]).text().trim(),
          ltp: $(columns[2]).text().trim(),
          change: $(columns[3]).text().trim(),
          percentChange: $(columns[4]).text().trim(),
          open: $(columns[5]).text().trim(),
          high: $(columns[6]).text().trim(),
          low: $(columns[7]).text().trim(),
          quantity: $(columns[8]).text().trim(),
          turnover: $(columns[9]).text().trim()
        });
      }
    });

    res.json(stocks);
  } catch (error) {
    console.error('Scraping failed:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default router;