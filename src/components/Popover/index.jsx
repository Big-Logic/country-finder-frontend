import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// STYLED COMPONENTS
import * as PO from "./PopoverStyles";

/**
 * Popover Component
 *
 * A reusable popover component that displays content in a floating panel anchored to a button.
 * Uses framer-motion for enter/exit animations and closes automatically when clicking outside.
 *
 * Props:
 * - children: React.ReactNode - Content to display inside the popover.
 * - buttonContent: React.ReactNode - Content for the button that toggles the popover.
 * - buttonCustomStyles?: RuleSet - Optional custom styles for the button.
 * - popoverCustomStyles?: RuleSet - Optional custom styles for the popover panel.
 *
 * Example usage:
 * <Popover buttonContent="Open">
 *   <div>Popover content</div>
 * </Popover>
 */

const PopOverContext = createContext({});

const Popover = ({ children }) => {
  // STATE
  const [open, setOpen] = useState(false);
  // REFS
  const buttonRef = useRef();
  const popoverRef = useRef();

  // EFFECTS
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <PopOverContext value={{ open, setOpen, buttonRef, popoverRef }}>
      <PO.Container>{children}</PO.Container>
    </PopOverContext>
  );
};

const Button = ({ children, customStyles }) => {
  const { buttonRef, setOpen } = useContext(PopOverContext);

  return (
    <PO.OpenButton
      ref={buttonRef}
      onClick={() => setOpen((prev) => !prev)}
      $buttonCustomStyles={customStyles}
    >
      {children}
    </PO.OpenButton>
  );
};

const Content = ({ children, customStyles }) => {
  const { open, popoverRef } = useContext(PopOverContext);

  return (
    <AnimatePresence>
      {open && (
        <PO.Popover
          as={motion.div}
          ref={popoverRef}
          $popoverCustomStyles={customStyles}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {children}
        </PO.Popover>
      )}
    </AnimatePresence>
  );
};

Popover.Button = Button;
Popover.Content = Content;

export default Popover;
