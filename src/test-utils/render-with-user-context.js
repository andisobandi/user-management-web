import { render } from "@testing-library/react";
import { useUserContext } from "@context/user-context";

jest.mock("@context/user-context");

const createMockUserContext = (overrides = {}) => {
  return {
    state: {
      mode: null,
      users: [],
      selectedUser: null,
      loading: false,
      ...overrides.state,
    },
    dispatch: overrides.dispatch || jest.fn(),
  };
};

export const renderWithUserContext = (ui, { contextOverrides = {} } = {}) => {
  const mockContext = createMockUserContext(contextOverrides);

  useUserContext.mockReturnValue(mockContext);

  return {
    ...render(ui),
    context: mockContext,
  };
};
