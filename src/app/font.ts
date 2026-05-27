import { Inter, Montserrat, Outfit } from 'next/font/google';

export const inter = Inter({ 
  subsets: ['latin'] 
});

export const outfit = Outfit({ 
  weight: ['400','500','700'], 
  subsets: ['latin'] 
});

export const montserrat = Montserrat({
  subsets:['latin'],
  weight:['400','600','700','800','900']
})