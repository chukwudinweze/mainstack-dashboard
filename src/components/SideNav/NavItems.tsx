import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.svg";
import item3 from "../../assets/item3.svg";
import item4 from "../../assets/item4.svg";
import item5 from "../../assets/item5.svg";
import item6 from "../../assets/item6.svg";
import item7 from "../../assets/item7.svg";
import item8 from "../../assets/item8.svg";
import dashboard from "../../assets/dashboard.svg";

interface NavItem {
  section: string;
  contents: NavItemContent[];
}

interface NavItemContent {
  label: string;
  icon: string;
  link: string;
}

const navItems: NavItem[] = [
  {
    section: "",
    contents: [
      { label: "Dashboard", icon: dashboard, link: "/" },
      { label: "item 1", icon: item1, link: "/item1" },
      { label: "item 2", icon: item2, link: "/item2" },
      { label: "item 3", icon: item3, link: "/item3" },
    ],
  },
  {
    section: "OTHERS 1",
    contents: [
      { label: "item 4", icon: item4, link: "/item4" },
      { label: "item 5", icon: item5, link: "/item5" },
    ],
  },
  {
    section: "OTHERS 2",
    contents: [
      { label: "item 6", icon: item6, link: "/item6" },
      { label: "item 7", icon: item7, link: "/item7" },
      { label: "item 8", icon: item8, link: "/item8" },
    ],
  },
];

export default navItems;
