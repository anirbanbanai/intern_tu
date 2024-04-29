interface TableRow {
    Id: number;
    name: string;
    phone_number: number;
    age: number;
    company: string;
  }

 export const TABLE_ROWS: TableRow[] = [
    {
      Id: 1,
      name: "John Michael",
      phone_number: 135574,
      age:43,
      company:"XSE"
    },
    {
      Id: 2,
      name: "Alexa",
      phone_number: 1355274,
      age:41,
      company:"XSEs"
    },
    {
      Id: 3,
      name: " Michael",
      phone_number: 1135574,
      age:25,
      company:"XE"
    },
    {
      Id: 4,
      name: "Laurent Perrier",
      phone_number: 5574,
      age:32,
      company:"XSE"
    },
    {
      Id: 5,
      name: "Richard ",
      phone_number: 1345574,
      age:36,
      company:"XSE"
    },
    
  ];

 export const TABLE_HEAD: string[] = ["id", "Name", "Phone Number", "Age", "Company"];

  interface TabData {
    label: string;
    value: string;
    desc: string;
  }

 export const data: TabData[] = [
    {
      label: "AdvanceTable",
      value: "at",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Basic element",
      value: "bm",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Validation",
      value: "vl",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    }
  ];