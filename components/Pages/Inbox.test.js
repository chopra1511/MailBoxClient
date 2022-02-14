import { render, screen } from "@testing-library/react";
import Inbox from "./Inbox";
import userEvent from "@testing-library/user-event";

describe("Inbox Testing", () => {
    test("Word rendering", () => {
        render(<Inbox/>)
        const check = screen.getByText("MailBox!", { exact: false });
        expect(check).toBeInTheDocument();
    });

     test("Word rendering2", () => {
       render(<Inbox />);
       const check = screen.getByText("Search", { exact: false });
       expect(check).toBeInTheDocument();
     });

     test("mail rendering",async () => {
       render(<Inbox />);
       const check = await screen.findAllByRole("button");
       expect(check).not.toHaveLength(0);
     });

     test("mail rendering2", async () => {
       render(<Inbox />);
       const check = await screen.findAllByRole("link");
       expect(check).not.toHaveLength(0);
     });
});

describe("delete testing", () => {
    test("testing on delete functionality", async () => {
        render(<Inbox />);
        const check = await screen.findAllByRole("link");
        expect(check).not.toHaveLength(0);
    });

     test("testing on delete functionality2", async () => {
       render(<Inbox />);
       const check = await screen.findAllByRole("button");
       expect(check).not.toHaveLength(0);
     });
})