import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [delayedLocation, setDelayedLocation] = useState(location);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedLocation(location);
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [location]);
  return (
    <AnimatePresence initial={false}>
      <Routes location={delayedLocation} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<p>Pages not found</p>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
