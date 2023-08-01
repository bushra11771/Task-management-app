// api.js

const mockData = {
  users: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more mock data as needed
  ],
};

// Simulate a delay to mimic a real API response time
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulated API function to get users
export const getUsers = async () => {
  try {
    await delay(1000); // Simulate a delay of 1 second
    return { data: mockData.users }; // Return the mock data
  } catch (error) {
    throw new Error("Failed to fetch users.");
  }
};
