import { motion } from "framer-motion";
import { BASE_PATH } from "@/utils/config";

const demoitems = {
    "name": "Programming Languages",
    "items": [
        { "name": "C", "imgpath": "/skills/c.png" },
        { "name": "C++", "imgpath": "/skills/c++.png" },
        { "name": "C#", "imgpath": "/skills/csharp.png" },
        { "name": "Python", "imgpath": "/skills/python.png" },
        { "name": "JavaScript", "imgpath": "/skills/javascript.png" },
        { "name": "TypeScript", "imgpath": "/skills/typescript.png" },
        { "name": "Java", "imgpath": "/skills/java.png" },
        { "name": "Kotlin", "imgpath": "/skills/kotlin.png" },
        { "name": "Flutter", "imgpath": "/skills/flutter.png" }
    ]
}

export default function Skills({ item = demoitems }) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
        <span className="w-2 h-6 bg-blue-600 rounded-full" />
        {item.name}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {item.items.map((skill, index) => (
          <div 
            key={index}
            className="group relative flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
              <img 
                src={BASE_PATH + skill.imgpath} 
                alt={skill.name} 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}