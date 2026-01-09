"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInLeft,
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

type Activity = {
  id: string;
  name: string;
  image: string;
  title: string;
  description: string;
  features: string[];
  icon: string; // For custom SVG icons
};

const Activities = () => {
  const activities: Activity[] = [
    {
      id: "zip-lining",
      name: "Zip Lining",
      image:
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
      title: "Thrill Above Ground: The Zip Line Adventure",
      description:
        "Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling the wind rush past, and experiencing nature from breathtaking heights. Unleash your inner adventurer today.",
      features: [
        "Treetop Views",
        "Adrenaline Rush",
        "Safety Measures",
        "Nature Immersion",
      ],
      icon: "zip",
    },
    {
      id: "bungee-jumping",
      name: "Bungee Jumping",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      title: "Leap of Faith: Ultimate Bungee Experience",
      description:
        "Experience the ultimate adrenaline rush as you freefall from incredible heights, feeling the rush of wind and the thrill of the bounce. A once-in-a-lifetime adventure for the brave.",
      features: [
        "Extreme Heights",
        "Heart-Pounding Thrills",
        "Professional Safety",
        "Unforgettable Memories",
      ],
      icon: "bungee",
    },
    {
      id: "rafting",
      name: "Rafting",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
      title: "Rapid Adventure: White Water Rafting",
      description:
        "Navigate through thrilling rapids and serene waters, working as a team to conquer nature's challenges. Experience the power of rivers and the beauty of untouched wilderness.",
      features: [
        "Rapid Navigation",
        "Team Building",
        "Scenic Routes",
        "Expert Guides",
      ],
      icon: "raft",
    },
    {
      id: "paragliding",
      name: "Paragliding",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      title: "Soar High: Paragliding Adventure",
      description:
        "Glide through the skies like a bird, taking in panoramic views of mountains, valleys, and landscapes below. Experience the freedom of flight in this unforgettable aerial adventure.",
      features: [
        "Aerial Views",
        "Freedom of Flight",
        "Professional Pilots",
        "Breathtaking Scenery",
      ],
      icon: "paraglide",
    },
    {
      id: "ski-touring",
      name: "Ski Touring",
      image:
        "https://images.unsplash.com/photo-1551524164-6cf77f5e1d65?w=800&q=80",
      title: "Mountain Escape: Ski Touring Experience",
      description:
        "Explore pristine mountain slopes and untouched powder as you ski through breathtaking alpine landscapes. A perfect blend of adventure, skill, and natural beauty.",
      features: [
        "Mountain Terrain",
        "Powder Snow",
        "Scenic Routes",
        "Expert Instruction",
      ],
      icon: "ski",
    },
  ];

  const [selectedActivity, setSelectedActivity] = useState<Activity>(
    activities[0]
  );

  const renderActivityIcon = (iconType: string, isSelected: boolean) => {
    const iconColor = isSelected ? "white" : "#1a43d3";
    const size = 24;

    switch (iconType) {
      case "zip":
        // Zip line icon - person on a line
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8L22 8"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="8" r="3" stroke={iconColor} strokeWidth="2" />
            <path
              d="M9 11L9 15M15 11L15 15"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 15L12 18L15 15"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "bungee":
        // Bungee jumping icon - person jumping
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L12 6"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 6C10 6 8 8 8 10V18C8 20 10 22 12 22C14 22 16 20 16 18V10C16 8 14 6 12 6Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="1.5" fill={iconColor} />
            <path
              d="M10 14L14 14"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "raft":
        // Raft icon - boat with people
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18L21 18"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 15C4 15 6 13 8 15C10 17 14 17 16 15C18 13 20 15 20 15"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="7" cy="15" r="1.5" fill={iconColor} />
            <circle cx="17" cy="15" r="1.5" fill={iconColor} />
            <path
              d="M6 12L18 12"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "paraglide":
        // Paragliding icon - parachute/glider
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8 2 5 5 5 9C5 10 6 11 7 11C8 11 9 10 9 9C9 7 10 6 12 6C14 6 15 7 15 9C15 10 16 11 17 11C18 11 19 10 19 9C19 5 16 2 12 2Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6L12 20M8 20L16 20"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="20" r="2" stroke={iconColor} strokeWidth="2" />
          </svg>
        );
      case "ski":
        // Ski icon - skis
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4L8 20M18 4L16 20"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 4L10 6M18 4L14 6"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="7" cy="12" r="1" fill={iconColor} />
            <circle cx="17" cy="12" r="1" fill={iconColor} />
            <path
              d="M7 8L17 8"
              stroke={iconColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 p-7">
      <div className=" ">
        <div className="lg:grid  lg:grid-cols-7 gap-12 items-start">
          {/* Left Column - Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=" max-h-[85vh] overflow-hidden shadow-2xl md:col-span-3"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1765871321198-30fffc41e605?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              }
              alt={selectedActivity.name}
              width={400}
              height={800}
              className="object-cover rounded-none transition-opacity duration-300 w-full h-auto"
            />
          </motion.div>

          {/* Right Column - Content */}
          <div className="col-span-4 space-x-6 md:pr-8 py-12">
            {/* Main Heading */}
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-8 leading-tight"
            >
              Our Particular Activitiies
            </motion.h2>

            {/* Activity List */}
            <div className="gap-x-9 mb-8 grid md:grid-cols-7">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="md:col-span-3 space-y-8"
              >
                {activities.map((activity) => {
                  const isSelected = selectedActivity.id === activity.id;
                  return (
                    <motion.button
                      key={activity.id}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedActivity(activity)}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all col-span-2 ${
                        isSelected
                          ? "bg-secondary text-white shadow-md"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="shrink-0">
                        {renderActivityIcon(activity.icon, isSelected)}
                      </div>
                      <span className="font-medium text-left">
                        {activity.name}
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Selected Activity Details */}
              <div className="md:col-span-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedActivity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {selectedActivity.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {selectedActivity.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {selectedActivity.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
                      Check Availability
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
