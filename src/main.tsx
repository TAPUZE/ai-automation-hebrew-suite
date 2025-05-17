
import { createRoot } from 'react-dom/client'
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <TooltipPrimitive.Provider>
    <App />
  </TooltipPrimitive.Provider>
);
