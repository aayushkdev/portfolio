import React from 'react';
import { EXPERIENCES } from '../constants';
import type { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="group relative pl-8 sm:pl-12">
    <div className="absolute left-0 top-1 h-full w-px bg-gray-800"></div>
    <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-red-500 transition-transform group-hover:scale-125"></div>
    <div className="mb-12">
      <p className="text-sm font-medium text-gray-400">{item.period}</p>
      <h3 className="mt-1 text-xl font-bold text-white">{item.role}</h3>
      <h4 className="text-md font-medium text-gray-300">{item.company} &middot; {item.location}</h4>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        {item.description.map((point, index) => (
          <li key={index} className="text-gray-400">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2 className="font-mono text-3xl text-red-500">/experience</h2>
      <div className="relative mt-12">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={index} item={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
