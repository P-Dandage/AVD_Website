// Import assets correctly so Vite bundles them for production
import laserImg from '../assets/Laser.png';
import plasmaImg from '../assets/Plasma.png';
import shearingImg from '../assets/Shearing.png';

export const catalogData = [
  {
    id: 1,
    name: "Industrial Pioneer Series",
    category: "fiber-laser",
    categoryName: "Fiber Laser Cutting Machine",
    image: laserImg,
    description: "Heavy-duty industrial fiber laser cutting system engineered for continuous high-speed sheet metal fabrication with maximum precision.",
    specifications: "Power: 1kW - 20kW | Cutting Area: 3000x1500mm to 12000x2500mm | Max Speed: 140m/min"
  },
  {
    id: 2,
    name: "In-demand Innovation",
    category: "fiber-laser",
    categoryName: "Fiber Laser Cutting Machine",
    image: laserImg,
    description: "Next-generation compact laser cutting architecture optimized for fast job-shop turnaround and high energy efficiency.",
    specifications: "Power: 1.5kW - 6kW | Cutting Bed: Compact Modular | Control: CypCut CNC"
  },
  {
    id: 3,
    name: "Futuristic Laser Series",
    category: "fiber-laser",
    categoryName: "Fiber Laser Cutting Machine",
    image: laserImg,
    description: "Ultra-high power intelligent laser cutting machine featuring automated nozzle changing and advanced AI plate alignment.",
    specifications: "Power: Up to 40kW | Precision: ±0.03mm | Auto Focus Head"
  },
  {
    id: 4,
    name: "Professional Tube Cutting Machine",
    category: "fiber-laser",
    categoryName: "Fiber Laser Cutting Machine",
    image: laserImg,
    description: "Specialized rotary fiber laser system designed for flawless profile, pipe, and tube cutting across complex designs.",
    specifications: "Diameter: 20-350mm | Length: 6000mm | Pneumatic Chucks"
  },
  {
    id: 5,
    name: "Dual-position Exchange Table",
    category: "fiber-laser",
    categoryName: "Fiber Laser Cutting Machine",
    image: laserImg,
    description: "High-throughput fiber laser equipped with a hydraulic shuttle exchange table for simultaneous loading and cutting.",
    specifications: "Exchange Time: < 15 seconds | Fully Enclosed Cabin"
  },
  {
    id: 6,
    name: "Gantry Type",
    category: "plasma",
    categoryName: "CNC Plasma Cutting Machine",
    image: plasmaImg,
    description: "Heavy gantry structure CNC plasma and oxyfuel cutting machine built for massive structural steel plates.",
    specifications: "Width: Up to 6000mm | Thickness: Up to 150mm"
  },
  {
    id: 7,
    name: "Table Type",
    category: "plasma",
    categoryName: "CNC Plasma Cutting Machine",
    image: plasmaImg,
    description: "Integrated table-type CNC plasma cutter offering rigid stability and excellent fume extraction performance.",
    specifications: "Table Size: 1500x3000mm | Dual Side Servo Drive"
  },
  {
    id: 8,
    name: "Portable Type",
    category: "plasma",
    categoryName: "CNC Plasma Cutting Machine",
    image: plasmaImg,
    description: "Compact and portable CNC plasma cutting machine ideal for on-site fabrication and smaller workshop floors.",
    specifications: "Cutting Width: 1500mm | Lightweight Aluminum Alloy Beam"
  },
  {
    id: 9,
    name: "CNC Press Brake",
    category: "press-brake",
    categoryName: "CNC / NC Press Brake",
    image: shearingImg,
    description: "Multi-axis CNC synchronized press brake machine equipped with advanced graphical controllers for precise angle bending.",
    specifications: "Tonnage: 100T - 500T | Length: 2500mm - 6000mm | Delem Controller"
  },
  {
    id: 10,
    name: "NC Press Brake",
    category: "press-brake",
    categoryName: "CNC / NC Press Brake",
    image: shearingImg,
    description: "Cost-effective mechanical/hydraulic NC press brake designed for reliable everyday metal bending operations.",
    specifications: "Estun E21 NC Controller | Motorized Depth Adjustment"
  },
  {
    id: 11,
    name: "Tandem & Heavy Tonnage Press Brake Machine",
    category: "press-brake",
    categoryName: "CNC / NC Press Brake",
    image: shearingImg,
    description: "Dual-machine synchronized tandem press brake engineered for ultra-long poles, chassis, and heavy industrial beams.",
    specifications: "Combined Tonnage: Up to 1600T | Length: Up to 14000mm"
  },
  {
    id: 12,
    name: "Shearing Machine",
    category: "shearing",
    categoryName: "Shearing Machine",
    image: shearingImg,
    description: "High-speed hydraulic guillotine shearing machine built for clean, accurate, and repeatable metal sheet cuts.",
    specifications: "Thickness: 4mm - 30mm | Blade Gap Quick Adjustment"
  },
  {
    id: 13,
    name: "Hydraulic Press",
    category: "hydraulic-press",
    categoryName: "Hydraulic Press",
    image: plasmaImg,
    description: "Four-column industrial hydraulic press machine optimized for deep drawing, stamping, molding, and straightening.",
    specifications: "Capacity: 100T - 2000T | Adjustable Pressure"
  },
  {
    id: 14,
    name: "Spares & Consumables",
    category: "spares",
    categoryName: "Spares & Consumables",
    image: plasmaImg,
    description: "Genuine laser nozzles, ceramic rings, focus lenses, protection glasses, and plasma consumables.",
    specifications: "OEM Certified Replacement Parts"
  }
];