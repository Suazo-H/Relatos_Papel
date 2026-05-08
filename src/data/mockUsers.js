export const mockUsers = [
  {
    id: 1,
    username: "lectora_urbana",
    password: "123456",
    customer: {
      name: "María López",
      email: "maria.lopez@email.com",
      phone: "600-123-456",
      address: "Miami, Estados Unidos",
      memberSince: "2021",
    },
    recentOrders: [
      {
        id: "ORD-BOOK-001",
        date: "2026-03-10",
        status: "Entregado",
        total: 58.97,
        items: [
          { name: "Cien años de soledad", quantity: 1, price: 19.99 },
          { name: "El principito", quantity: 2, price: 9.99 },
          { name: "1984", quantity: 1, price: 18.99 },
        ],
      },
      {
        id: "ORD-BOOK-002",
        date: "2026-02-25",
        status: "En proceso",
        total: 34.98,
        items: [
          { name: "Orgullo y prejuicio", quantity: 1, price: 14.99 },
          { name: "Hábitos atómicos", quantity: 1, price: 19.99 },
        ],
      },
    ],
  },
  {
    id: 2,
    username: "dev_reader",
    password: "abcdef",
    customer: {
      name: "Carlos Martínez",
      email: "carlos.dev@email.com",
      phone: "111-987-654",
      address: "Barcelona, España",
      memberSince: "2023",
    },
    recentOrders: [
      {
        id: "ORD-BOOK-003",
        date: "2026-03-05",
        status: "Entregado",
        total: 72.5,
        items: [
          { name: "Clean Code", quantity: 1, price: 32.5 },
          { name: "The Pragmatic Programmer", quantity: 1, price: 40.0 },
        ],
      },
      {
        id: "ORD-BOOK-004",
        date: "2026-02-18",
        status: "Entregado",
        total: 27.99,
        items: [
          { name: "JavaScript: The Good Parts", quantity: 1, price: 27.99 },
        ],
      },
    ],
  },
  {
    id: 3,
    username: "fantasylover",
    password: "pass789",
    customer: {
      name: "Lucía Fernández",
      email: "lucia.fantasy@email.com",
      phone: "224-456-789",
      address: "Buenos Aires, Argentina",
      memberSince: "2020",
    },
    recentOrders: [
      {
        id: "ORD-BOOK-005",
        date: "2026-03-12",
        status: "En proceso",
        total: 89.97,
        items: [
          { name: "El nombre del viento", quantity: 1, price: 29.99 },
          { name: "Juego de tronos", quantity: 1, price: 29.99 },
          { name: "El camino de los reyes", quantity: 1, price: 29.99 },
        ],
      },
      {
        id: "ORD-BOOK-006",
        date: "2026-01-30",
        status: "Entregado",
        total: 24.99,
        items: [
          {
            name: "Harry Potter y la piedra filosofal",
            quantity: 1,
            price: 24.99,
          },
        ],
      },
    ],
  },
];
