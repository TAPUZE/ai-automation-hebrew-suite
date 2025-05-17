
import { createRoot } from 'react-dom/client'
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <TooltipPrimitive.Provider>
      <App />
    </TooltipPrimitive.Provider>
  </HelmetProvider>
);
