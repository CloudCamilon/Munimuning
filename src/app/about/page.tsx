"use client";

/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "../../../public/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { Spinner } from "@/components/ui/spinner";

const About = () => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const email = process.env.NEXT_PUBLIC_EMAILJS_EMAIL;

  const [userInput, setUserInput] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
    recipient: email,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const emailParams = {
        subject: userInput.subject,
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
        recipient: email,
      };

      const res = await emailjs.send(
        serviceID!,
        templateID!,
        emailParams!,
        userID
      );

      if (res.status === 200) {
        console.log("Message sent successfully!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center">
      <div
        id="about-page"
        className="flex flex-col px-6 md:px-48 lg:px-80 xl:px-96 2xl:px-0 2xl:max-w-[672px] py-8 text-center gap-8"
      >
        <div className="font-bold text-2xl">ABOUT</div>
        <div className={`relative w-full h-[357px]`}>
          <Image
            src={"/ice.png"}
            alt={"Ice Logo"}
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <div>
          Hi, I’m Ice—the artist and storyteller behind MuniMuning Studios. What
          started as a love for art and cats has grown into a creative space for
          illustrations, stories, and design.
        </div>
        <div className="flex justify-center border-b-2 pb-10 border-b-[#CFFF00]">
          <Star />
        </div>
        <div>
          <div className="font-bold text-2xl">CONTACT</div>
          <div className="font-bold mt-10 mb-4">
            Want to Work Together? Let’s Make Something Amazing!{" "}
          </div>
          <div>
            If you’ve got a creative idea or a custom project in mind, I’d love
            to hear about it! Feel free to take a look at my works or simply
            send me a meow through the inquiry form below. Let’s chat about how
            we can bring your vision to life, one thoughtful creation at a time.
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div id="inquire-form" className="flex flex-col gap-6">
            <Input
              id="form-name"
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.currentTarget.value })
              }
              className="h-[68px] rounded-[100px] bg-[#BB98FF40] placeholder:text-[#9E6CFF]"
              placeholder="Name"
            />
            <Input
              id="form-email"
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.currentTarget.value })
              }
              className="h-[68px] rounded-[100px] bg-[#BB98FF40] placeholder:text-[#9E6CFF]"
              placeholder="Email"
            />
            <Input
              id="form-subject"
              onChange={(e) =>
                setUserInput({ ...userInput, subject: e.currentTarget.value })
              }
              className="h-[68px] rounded-[100px] bg-[#BB98FF40] placeholder:text-[#9E6CFF]"
              placeholder="Subject"
            />
            <Textarea
              id="form-message"
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.currentTarget.value })
              }
              className="h-56 rounded-3xl bg-[#BB98FF40] placeholder:text-[#9E6CFF]"
              placeholder="Meowssage"
            />
            <Button
              onClick={handleSubmit}
              className="h-[68px] rounded-[100px] bg-[#9E6CFF]"
            >
              SUBMIT
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
