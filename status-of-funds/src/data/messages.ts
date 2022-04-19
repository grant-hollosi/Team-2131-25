export interface Message {
  name: string;
  status: string;
  date: string;
  id: number;
}

const messages: Message[] = [
  {
    name: 'Example Transaction',
    status: 'Pending',
    date: '9:32 AM',
    id: 0
  },
  {
    name: 'Example Transaction',
    status: 'Pending',
    date: '6:12 AM',
    id: 1
  },
  {
    name: 'Example Transaction',
    status: 'Pending',
    date: '4:55 AM',
    id: 2

  },
  {
    name: 'Example Transaction',
    status: 'Pending',
    date: 'Yesterday',
    id: 3
  },
  {
    name: 'Example Transaction',
    status: 'Pending',
    date: 'Yesterday',
    id: 4
  },
{
  name: 'Example Transaction',
  status: 'Pending',
  date: 'Yesterday',
  id: 5
},
{
  name: 'Example Transaction',
  status: 'Pending',
  date: 'Last Week',
  id: 6
},
{
  name: 'Example Transaction',
  status: 'Pending',
  date: 'Last Week',
  id: 7
}
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
