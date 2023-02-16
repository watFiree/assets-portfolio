import type { NextApiRequest, NextApiResponse } from 'next'
import { load } from 'cheerio';

const getETFValue = async (isin: string) => {
  const url = `https://www.justetf.com/en/etf-profile.html?isin=${isin}`;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = load(html);

    const tag = $('.infobox .val').children('span');
    const currency = tag.first().text();
    const value = tag.last().text();

    return { currency, value }
  }
  catch (error) {
    return null;
  }
};

export default async function handler(req: NextApiRequest,
  res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    const { isin } = req.query;

    try {
      const response = await getETFValue(isin as string);
      
      return res.status(200).json(response);
    }
    catch (error) {
      return res.status(400);
    }
  } else {
    res.status(200);
  }
}