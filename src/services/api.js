export const API = {
  users: async () => {
    const res = await fetch("../constants/users.json");
    if (!res.ok) throw new Error("Failed fetch users");
    const data = await res.json();

    return data.map((user) => ({
      ...user,
      avatar: `https://i.pravatar.cc/300?u=${user.id}`,
    }));
  },
};
