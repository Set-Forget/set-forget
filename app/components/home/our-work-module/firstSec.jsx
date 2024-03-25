import React, { useState } from "react";
import Container from "../../ecyce/container";
import Image from "next/image";
import underline from "../../../../public/underline.svg";
import arrow from "../../../../public/arrow.svg";
import Button from "../../ecyce/buttons";

const FirstSec = () => {
  return (
    <div className="w-full bg-sf-black text-sf-cream flex flex-col py-8">
      <Container className={"w-full py-16 grid grid-cols-12 gap-5 px-20"}>
        <div className="relative col-span-6">
          <h1 className="bold-neue text-heading">Here&apos;s what we do</h1>
          <h2 className="text-2xl my-4">
            Your automation department is here to help!
          </h2>
          <Image src={underline} className="absolute right-24 bottom-2" />
          <Image
            src={arrow}
            className="absolute -right-24 top-12 rotate-[230deg]"
          />
          <Image />
        </div>

        <div className="col-span-12 flex flex-col gap-10 sm:py-16 py-8 justify-center items-center">
          <div className="w-full grid grid-cols-3 gap-5">
            <div className="flip-card w-full">
              <div className="flip-card-inner">
                <div className="flip-card-front w-[427px]  border text-sf-cream border-sf-cream rounded-3.5xl flex justify-center items-center text-xl text-center">
                  Google Workspace Automation
                </div>
                <div className="flip-card-back w-[427px] bg-g-blue text-sf-cream rounded-3.5xl flex justify-center items-center p-2">
                  <p>
                    We create solutions in your Workspace leveraging Apps
                    Script, Google&apos;s programming language made to interact
                    with its&apos; tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card w-full">
              <div className="flip-card-inner">
                <div className="flip-card-front w-[427px]  border text-sf-cream border-sf-cream rounded-3.5xl flex justify-center items-center text-xl text-center">
                  Web Apps
                </div>
                <div className="flip-card-back w-[427px] bg-g-red text-sf-cream rounded-3.5xl flex justify-center items-center p-2">
                  <p>
                    Create custom WebApps as internal solutions using Google
                    Apps Script.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card w-full">
              <div className="flip-card-inner">
                <div className="flip-card-front w-[427px] border text-sf-cream border-sf-cream rounded-3.5xl flex justify-center items-center text-xl text-center">
                  Data
                </div>
                <div className="flip-card-back w-[427px] bg-g-yellow text-sf-black rounded-3.5xl flex justify-center items-center p-2">
                  <p>
                    Implement data warehouses in BigQuery and dashboards in
                    Looker Studio for insightful analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card w-full">
              <div className="flip-card-inner">
                <div className="flip-card-front w-[427px]  border text-sf-cream border-sf-cream rounded-3.5xl flex justify-center items-center text-xl text-center">
                  No code / App Sheet
                </div>
                <div className="flip-card-back w-[427px] bg-g-blue text-sf-cream rounded-3.5xl flex justify-center items-center p-2">
                  <p>
                    Develop customized applications on AppSheet to streamline
                    business processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card w-full">
              <div className="flip-card-inner">
                <div className="flip-card-front w-[427px]  border text-sf-cream border-sf-cream rounded-3.5xl flex justify-center items-center text-xl text-center">
                  Google Add-Ons
                </div>
                <div className="flip-card-back w-[427px] bg-g-green text-sf-cream rounded-3.5xl flex justify-center items-center p-2">
                  <p>
                    Build and deploy Add-ons for Google Marketplace to extend
                    the functionality of Google Workspace applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-card w-full">
              <div className="flip-card-inner">
                <div className="flip-card-front w-[427px]  border text-sf-cream border-sf-cream rounded-3.5xl flex justify-center items-center text-xl text-center">
                  Google Chrome Extensions
                </div>
                <div className="flip-card-back w-[427px] bg-g-red bg-g- text-sf-cream rounded-3.5xl flex justify-center items-center p-2">
                  <p>
                    Develop custom Chrome Extensions for improve productivity
                    and user experience within the browser.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button type={"outline"} text={"See more!"} />
        </div>

        <div className="c col-span-5"></div>
      </Container>
    </div>
  );
};

export default FirstSec;
