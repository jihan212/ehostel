const SidebarData = [
  {
    name: "Room Manage",
    icon: "bed-outline",
    subOptions: [
      { name: "Room", link: "/room" },
    ],
  },
  {
    name: "Cost Manage",
    icon: "calculator-outline",
    subOptions: [
      { name: "Add New ", link: "/add_new_cost" },
      { name: "List View", link: "/cost_list" },
    ],
  },
  {
    name: "Meal Manage",
    icon: "fast-food-outline",
    subOptions: [
      { name: "Add New Meal", link: "/add_new_meal" },
      { name: "Meal List", link: "/meal_list" },
    ],
  },
  {
    name: "Students Manage",

    subOptions: [
      { name: "Student Admission", link: "/dashboard/student_admission" },

      {
        name: "Student List",
        link: "/student_list",
      },
      {
        name: "Seat Allocation",
        link: "/seat_allocation",
      },
      {
        name: "Deposit",
        link: "/student_deposit",
      },
    ],
    icon: "people-outline",
  },

  {
    name: "Students Payment",
    icon: "logo-paypal",
    subOptions: [
      { name: "Add ", link: "/add_payment" },
      { name: "View", link: "/payment_list" },
    ],
  },
  {
    name: "Employee Manage",
    link: "/employee_manage",
    icon: "people-circle-outline",
  },
  {
    name: "Bill Manage",
    icon: "newspaper-outline",
    subOptions: [
      { name: "Add New ", link: "/add_bill" },
      { name: "List View", link: "/bill_list" },
    ],
  },
  {
    name: "Notice Board",
    icon: "notifications-outline",
    subOptions: [
      // { name: "Add Notice ", link: "/add_notice" },
      { name: "Notice", link: "/notice" },
    ],
  },
  {
    name: "Admin",
    subOptions: false,
    link: "/admin",
    icon: "person-add-outline",
  },
];
export default SidebarData;
