import React from "react";
import { render, screen, waitFor } from "./test-utils";
import AnimeContent from "../AnimeContent";

import { useSelector, useDispatch } from "react-redux";
import { selectedList } from "../../Redux/Actions/animeActions";

import axios from "axios";
//https://github.com/testing-library/react-testing-library/issues/480

jest.mock("axios");
it("test", async () => {
  axios.mockResolvedValue({ data: {} });
  render(<AnimeContent />);

  await waitFor(() =>expect(screen.getByText(/anime/i)).toBeInTheDocument);
});
