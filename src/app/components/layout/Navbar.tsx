"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";

const NavigationBar = () => (
  <Navbar maxWidth="xl" className="bg-background/70 backdrop-blur-md shadow-md">
    <NavbarBrand>
      <MdOutlineEmojiFoodBeverage
        color="#17C964"
        size={32}
        className="text-primary mr-2"
      />
      <Link href="/" className="font-bold text-inherit">
        Jarritos
      </Link>
    </NavbarBrand>

    <NavbarContent justify="end">
      <NavbarItem>
        <Link href="/orders">
          <Button variant="flat" className="bg-primaryGreen text-white">
            My Orders
          </Button>
        </Link>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);

export default NavigationBar;
