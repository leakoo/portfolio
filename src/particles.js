import { loadFull } from "tsparticles";

const loadParticles = async () => {
  try {
    const response = await fetch("/particles.json");
    const config = await response.json();

    await loadFull(tsParticles);
    
    await tsParticles.load({
      id: "tsparticles",
      options: config,
    });

  } catch (error) {
    console.error("Error loading particles:",error);
  }
};

export default loadParticles;
