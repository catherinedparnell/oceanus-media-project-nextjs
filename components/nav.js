import React from 'react';
import Link from 'next/link';
import Vector from './vectors-explore';

export default function NavBar(props) {
  return (
    <div className="font-bold nav fixed text-xl top-0 w-screen bg-dark text-offwhite flex justify-evenly h-16 z-50">
      <Link id="logo" href="/explore/home" passHref><div className="h-20 w-40 pb-2 link-logo"><Vector name="logo" className="h-full w-full" /></div></Link>
      <Link className="link" passHref href="/explore/plastics"><div className="p-4 link-h">Everything Plastic</div></Link>
      <Link className="link" passHref href="/explore/turtles"><div className="p-4 link-h">Suzie the Sea Turtle</div></Link>
      <Link className="link" passHref href="/explore/health"><div className="p-4 link-h">Human Health</div></Link>
      <Link className="link" passHref href="/explore/action"><div className="p-4 link-h">Take Action</div></Link>
      <Link className="link" passHref href="/explore/methods"><div className="p-4 link-h">Methodology</div></Link>
      <Link className="link" passHref href="/"><div className="p-4 link-h">Story</div></Link>
    </div>
  );
}
