import { Icons } from '../../assets/svg';

export const getCategories = (t: (key: string) => string) => [
  {
    id: 1,
    icon: Icons.Groceries,
    width: 30,
    height: 30,
    title: t('groceries'),
  },
  {
    id: 2,
    icon: Icons.Appliances,
    width: 30,
    height: 30,
    title: t('appliances'),
  },
  {
    id: 3,
    icon: Icons.Fashion,
    width: 30,
    height: 30,
    title: t('fashion'),
  },
  {
    id: 4,
    icon: Icons.Furniture,
    width: 30,
    height: 30,
    title: t('furniture'),
  },
];
