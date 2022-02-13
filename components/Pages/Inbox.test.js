import { render, screen } from "@testing-library/react";
import Inbox from "./Inbox";

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
})