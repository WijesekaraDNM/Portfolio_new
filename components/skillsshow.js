import skilldata from "../data/skillsdata.json";
import Skills from "../components/skills";
import { BASE_PATH } from "@/utils/config";

export default function SkillsShow() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-white dark:bg-gray-900">

      <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}
        style={{ backgroundImage: `url(${BASE_PATH}/bg/pexels.jpg)` }}/>

      <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-12">
          {skilldata.map((category, index) => (
            <Skills item={category} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}