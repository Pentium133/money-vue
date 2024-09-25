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
    icon: "info",
  },
  {
    name: "Budget",
    url: "/budget",
    icon: "contact_mail",
  },
  {
    name: "Pots",
    url: "/pots",
    icon: "contact_mail",
  },
  {
    name: "Recurring Bills",
    url: "/recurring_bills",
    icon: "contact_mail",
  },
];
