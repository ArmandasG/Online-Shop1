import { Disclosure } from "@headlessui/react";
import React from "react";

function FindUsPage() {
  return (
    <div className="mb-20 min-h-screen container lg:min-h-[70rem] lg:mb-20">
      <iframe
        className="w-full h-96 mb-8 lg:h-[60rem]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9226.288830262565!2d25.280657812072764!3d54.68195764035149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9413b1f67c6b%3A0x2600d18d4c454541!2sSenamiestis%2C%20Vilnius%2C%20Vilniaus%20m.%20sav.!5e0!3m2!1slt!2slt!4v1689797760022!5m2!1slt!2slt"
      />
      <h2 className="underline font-bold my-4 text-2xl">STOCKLISTS</h2>
      <div className="py-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex py-2 font-semibold cursor-pointer">
                <h3 className="text-xl lg:text-5xl">VILNIUS</h3>{" "}
                {open ? (
                  <i
                    className="fa fa-angle-up pl-2 mt-0.5 lg:mt-2 lg:text-2xl lg:font-bold"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-angle-down pl-2 mt-0.5 lg:mt-2 lg:text-2xl lg:font-bold"
                    aria-hidden="true"
                  ></i>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 text-lg lg:text-2xl">
                <h4>SENAMIESTIS</h4>
                <p>Senamiesčio g. **, 07104 Vilnius</p>
                <div className="flex flex-col">
                  <span>PHONE: +370********</span>
                  <span>I-V 08:00-17:00</span>
                  <span>VI-VII 10:00-14:00</span>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="py-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex py-2 font-semibold cursor-pointer">
                <h3 className="text-xl lg:text-5xl">ŠIAULIAI</h3>{" "}
                {open ? (
                  <i
                    className="fa fa-angle-up pl-2 mt-0.5 lg:mt-2 lg:text-2xl lg:font-bold"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-angle-down pl-2 mt-0.5 lg:mt-2 lg:text-2xl lg:font-bold"
                    aria-hidden="true"
                  ></i>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 text-lg lg:text-2xl">
                <h4>CENTRAS</h4>
                <p>Centro g. **, 02104 Šiauliai</p>
                <div className="flex flex-col">
                  <span>PHONE: +370********</span>
                  <span>I-V 08:00-17:00</span>
                  <span>VI-VII 10:00-14:00</span>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default FindUsPage;
