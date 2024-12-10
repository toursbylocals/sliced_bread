import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "@/components/Modal";

describe("Modal Component", () => {
  const mockOnClose = jest.fn();

  const renderModal = (isOpen: boolean) =>
    render(
      <Modal isOpen={isOpen} onClose={mockOnClose}>
        <p>Modal Content</p>
      </Modal>
    );

  it("does not render when `isOpen` is false", () => {
    renderModal(false);
    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument();
  });

  it("renders when `isOpen` is true", () => {
    renderModal(true);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  it("calls `onClose` when the close button is clicked", () => {
    renderModal(true);
    const closeButton = screen.getByRole("button", { name: /×/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("renders children passed to the modal", () => {
    renderModal(true);
    const modalContent = screen.getByText(/modal content/i);
    expect(modalContent).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    renderModal(true);
    const modal = screen.getByRole("dialog");
    expect(modal).toHaveAttribute("aria-modal", "true");
  });
});
