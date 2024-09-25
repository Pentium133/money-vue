export interface IMenyItem {
  name: string;
  url: string;
  icon: string;
}

export const MENU_ITEMS: IMenyItem[] = [
  {
    name: "Overview",
    url: "/",
    icon: "home",
  },
  {
    name: "Transactions",
    url: "/transactions",
    icon: "transaction",
  },
  {
    name: "Budget",
    url: "/budget",
    icon: "budget",
  },
  {
    name: "Pots",
    url: "/pots",
    icon: "pots",
  },
  {
    name: "Recurring Bills",
    url: "/recurring_bills",
    icon: "bills",
  },
];
