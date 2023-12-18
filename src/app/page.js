"use client";
import Content from "@/components/Content/Content";
import { getText } from "@/lib/get/getFunctions";
import { useEffect, useState } from "react";

// Home Page
export default function Home() {
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");
  useEffect(() => {
    (async () => {
      setMission(await getText("", "", "mission.txt"));
      setVision(await getText("", "", "vision.txt"));
    })();
  }, []);
  return (
    <main>
      <h1>Project Lily</h1>
      <p>Never Settle, Persue Virtue</p>
      <Content title="Vision" data={vision} />
      <Content title="Mission" data={mission} />
    </main>
  );
}
