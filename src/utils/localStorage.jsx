const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Design Landing Page", "taskDescription": "Create a high-fidelity wireframe.", "taskDate": "2024-10-25", "category": "Design" },
      { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Fix Login Bug", "taskDescription": "Resolve password reset issue.", "taskDate": "2024-10-20", "category": "Development" }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Database Migration", "taskDescription": "Migrate to AWS cluster.", "taskDate": "2024-10-26", "category": "DevOps" }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Social Media Campaign", "taskDescription": "Plan marketing posts.", "taskDate": "2024-10-30", "category": "Marketing" }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "New Hire Onboarding", "taskDescription": "Guide new developers.", "taskDate": "2024-10-26", "category": "HR" }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Prototype Animation", "taskDescription": "Add framer-motion animations.", "taskDate": "2024-10-27", "category": "Design" }
    ]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}