interface SeedEmployee {
  id: number;
  firstname: string;
  lastname?: string;
  department_id: number;
}

const sampleEmployees: SeedEmployee[] = [
  {
    id: 1,
    firstname: "Avery",
    lastname: "Morgan",
    department_id: 1,
  },
  {
    id: 2,
    firstname: "Jordan",
    lastname: "Patel",
    department_id: 2,
  },
  {
    id: 3,
    firstname: "Taylor",
    lastname: "Nguyen",
    department_id: 3,
  },
  { id: 4, firstname: "Casey", lastname: "Reed", department_id: 4 },
  { id: 5, firstname: "Morgan", lastname: "Brooks", department_id: 5 },
  { id: 6, firstname: "Riley", lastname: "Carter", department_id: 6 },
  { id: 7, firstname: "Cameron", lastname: "Foster", department_id: 7 },
  { id: 8, firstname: "Quinn", lastname: "Hayes", department_id: 8 },
  { id: 9, firstname: "Parker", lastname: "Bennett", department_id: 9 },
  { id: 10, firstname: "Reese", lastname: "Coleman", department_id: 10 },
  { id: 11, firstname: "Drew", lastname: "Sullivan", department_id: 11 },
  { id: 12, firstname: "Harper", lastname: "Mitchell", department_id: 12 },
  { id: 13, firstname: "Skyler", lastname: "Turner", department_id: 13 },
  { id: 14, firstname: "Emerson", lastname: "Phillips", department_id: 1 },
  { id: 15, firstname: "Finley", lastname: "Parker", department_id: 2 },
  { id: 16, firstname: "Sage", lastname: "Evans", department_id: 3 },
  { id: 17, firstname: "Rowan", lastname: "Edwards", department_id: 4 },
  { id: 18, firstname: "Blair", lastname: "Collins", department_id: 5 },
  { id: 19, firstname: "Kendall", lastname: "Stewart", department_id: 6 },
  { id: 20, firstname: "Alexis", lastname: "Morris", department_id: 7 },
  { id: 21, firstname: "Dakota", lastname: "Rogers", department_id: 8 },
  { id: 22, firstname: "Jesse", lastname: "Cook", department_id: 9 },
  { id: 23, firstname: "Marley", lastname: "Morgan", department_id: 10 },
  { id: 24, firstname: "Robin", lastname: "Bell", department_id: 11 },
  { id: 25, firstname: "Ari", lastname: "Murphy", department_id: 12 },
  { id: 26, firstname: "Micah", lastname: "Bailey", department_id: 13 },
  { id: 27, firstname: "Lennon", lastname: "Rivera", department_id: 1 },
  { id: 28, firstname: "Shawn", lastname: "Cooper", department_id: 3 },
  { id: 29, firstname: "Toby", lastname: "Richardson", department_id: 6 },
  { id: 30, firstname: "Jamie", lastname: "Cox", department_id: 9 },
  { id: 31, firstname: "Peyton", lastname: "Howard", department_id: 10 },
  { id: 32, firstname: "Remy", lastname: "Ward", department_id: 11 },
  { id: 33, firstname: "Milan", lastname: "Torres", department_id: 13 },
];

export { sampleEmployees };
export default sampleEmployees;
