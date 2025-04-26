import WordRel from "./WordRel/WordRel";

const DataMuse = () => {
  return (
    <section className="p-3">
      <div className="flex flex-col items-center gap-5 bg-gray-200 rounded-xl p-3 mt-4 min-h-[48dvh] text-gray-700 h-[75dvh]">
        <h3 className="text-xl font-semibold">Explore Related Words</h3>
        <WordRel />
      </div>
    </section>
  );
};

export default DataMuse;
