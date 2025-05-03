import Image from "next/image"; // Keep if you use Image elsewhere, otherwise can remove
import SelectYearButtons from "./_components/SelectYearButtons";

export default function Home() {
  return (
    // Use a dark background color and light text color for the whole page
    <div className="min-h-screen flex flex-col bg-[#0B1416] text-[#D7DADC]">
      {/* Header with a slightly different dark background and border */}
 
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-8"> {/* Added main tag for structure and padding */}
          <SelectYearButtons />
      </main>
    </div>
  );
}