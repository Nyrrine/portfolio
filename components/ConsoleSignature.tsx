'use client';

import { useEffect } from 'react';

export default function ConsoleSignature() {
  useEffect(() => {
    // ASCII art for NYRRINE
    const asciiArt = `███╗   ██╗██╗   ██╗██████╗ ██████╗ ██╗███╗   ██╗███████╗
████╗  ██║╚██╗ ██╔╝██╔══██╗██╔══██╗██║████╗  ██║██╔════╝
██╔██╗ ██║ ╚████╔╝ ██████╔╝██████╔╝██║██╔██╗ ██║█████╗  
██║╚██╗██║  ╚██╔╝  ██╔══██╗██╔══██╗██║██║╚██╗██║██╔══╝  
██║ ╚████║   ██║   ██║  ██║██║  ██║██║██║ ╚████║███████╗
╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝`;

    // Display the ASCII art and message in console
    console.log(`%c${asciiArt}`, 'color: #FFB6C1; font-family: monospace; font-size: 12px; font-weight: bold;');
    console.log('%cContact me on Discord if there\'s any issues with this website!', 'color: #FFB6C1; font-size: 12px;');
    console.log('%cDiscord: nyrrine', 'color: #FFB6C1; font-size: 12px; font-weight: bold;');
  }, []);

  return null;
}