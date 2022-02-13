import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Mail Component", () => {
    test("render name Testing", () => {
        render(<Welcome/>);
        const check = screen.getByText("Welcome", { exact: false });
        expect(check).toBeInTheDocument();
    });

    test("render name Testing2", () => {
      render(<Welcome />);
      const check = screen.getByText("Mail Box!", { exact: false });
      expect(check).toBeInTheDocument();
    });

    test("render name Testing3", () => {
      render(<Welcome />);
      const check = screen.getByText("TO:", { exact: false });
      expect(check).toBeInTheDocument();
    });

});