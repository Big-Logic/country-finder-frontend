import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { AnimatePresence } from "motion/react";
import { HiOutlineChevronLeft } from "react-icons/hi2";

// STYLED COMPONENTS
import * as D from "./DrawerStyles";
import { createPortal } from "react-dom";

const DrawerContext = createContext({});

const Drawer = ({ children, drawerCustomStyles, showCloseButton = true }) => {
  // Function to handle click on the mobile nav bar container

  const [open, setOpen] = useState(false);

  const handleDrawerContainerClick = (e) => {
    if (e.target.id !== "drawer-container123-dwrn-sa12ss") return;

    setOpen(false);
  };

  return (
    <DrawerContext
      value={{
        open,
        setOpen,
        drawerCustomStyles,
        showCloseButton,
        handleDrawerContainerClick,
      }}
    >
      {children}
    </DrawerContext>
  );
};

const OpenButton = ({ children, customStyles }) => {
  const { setOpen } = useContext(DrawerContext);
  return (
    <D.StyledOpenButton
      $customStyles={customStyles}
      onClick={() => setOpen(true)}
    >
      {children}
    </D.StyledOpenButton>
  );
};

const CloseButton = () => {
  const { setOpen } = useContext(DrawerContext);

  return (
    <D.StyledCloseButton onClick={() => setOpen(false)}>
      <HiOutlineChevronLeft />
    </D.StyledCloseButton>
  );
};

const ContentArea = ({ children, customStyles }) => {
  const {
    open,
    setOpen,
    drawerCustomStyles,
    showCloseButton,
    handleDrawerContainerClick,
  } = useContext(DrawerContext);

  function closeDrawer() {
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {createPortal(
            <D.Container
              onClick={handleDrawerContainerClick}
              id="drawer-container123-dwrn-sa12ss"
              $customStyles={drawerCustomStyles}
            >
              <D.ContentBox
                $customStyles={customStyles}
                key="mobile-nav-bar"
                initial={{
                  x: "-100%",
                  opacity: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                exit={{
                  x: "-100%",
                  opacity: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
              >
                {showCloseButton && <CloseButton />}
                {Children.map(children, (child) =>
                  cloneElement(child, { action: closeDrawer })
                )}
              </D.ContentBox>
            </D.Container>,
            document.getElementById("react-portal-container-s32a12")
          )}
        </>
      )}
    </AnimatePresence>
  );
};

Drawer.OpenButton = OpenButton;
Drawer.ContentArea = ContentArea;

export default Drawer;
