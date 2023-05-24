import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="text-white bg-palette-blue">
      <Container>
        <div className=" border-opacity-10 py-4">
          <div className="flex flex-wrap text-[10px]">
            <div className="flex space-x-1 mb-1 md:mb-0">
              <a
                href="https://www.350lab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-gray-500 focus:text-gray-500"
              >
                Maintained by 350lab Studio
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
