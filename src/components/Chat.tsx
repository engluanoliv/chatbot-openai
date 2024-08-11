"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3 text-state-600 text-sm">
          <Avatar>
            <AvatarFallback>LO</AvatarFallback>
            <AvatarImage src="https://github.com/engluanoliv.png" />
          </Avatar>
          <p className="leading-relaxed">
            <span className="block font-bold text-slate-800">Human:</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            suscipit sapiente, iste earum minus quod veniam ex. Officiis,
            inventore tempore atque qui exercitationem omnis dicta illo dolores
            quis aliquam vel.
          </p>
        </div>
        <div className="flex gap-3 text-state-600 text-sm">
          <Avatar>
            <AvatarFallback>RS</AvatarFallback>
            <AvatarImage src="https://github.com/rocketseat.png" />
          </Avatar>
          <p className="leading-relaxed">
            <span className="block font-bold text-slate-800">Human:</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            suscipit sapiente, iste earum minus quod veniam ex. Officiis,
            inventore tempore atque qui exercitationem omnis dicta illo dolores
            quis aliquam vel.
          </p>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Input placeholder="How can I help you?" />
        <Button type="submit">Send</Button>
      </CardFooter>
    </Card>
  );
}
