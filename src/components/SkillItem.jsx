function SkillItem({ skill }) {
  return (
    <li className="flex flex-col items-center justify-center gap-4 md:text-lg text-base bg-stone-900 hover:bg-stone-800 transition-all p-4 rounded-lg text-center">
      <span className="text-2xl">{skill.icon}</span>
      <p className="capitalize">{skill.skillName}</p>
    </li>
  );
}

export default SkillItem;
