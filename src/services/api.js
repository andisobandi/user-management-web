export const API = {
  users: async () => {
    const res = await fetch("/data/users.json");
    if (!res.ok) throw new Error("Failed fetch users");
    const data = await res.json();

    return data.map((user) => ({
      ...user,
      avatar: `https://i.pravatar.cc/300?u=${user.id}`,
    }));
  },

  createUser: async (payload) => {
    const now = Date.now();
    return {
      id: now.toString(),
      avatar: `https://i.pravatar.cc/300?u=${now}`,
      createdAt: new Date().toISOString(),
      ...payload,
    };
  },

  updateUser: async (user, payload) => {
    return {
      ...user,
      ...payload,
      updatedAt: new Date().toISOString(),
    };
  },
};
