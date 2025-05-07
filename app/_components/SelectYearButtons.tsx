import { yearAndSubjects } from "@/lib/global-data";


export default function SelectYearButtons() {

    return (
        <div className="space-y-8">
            {/* Text adjusted for dark theme */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">KU MBBS Viva Sharing</h1> {/* White for main title */}
                <p className="text-xl text-[#A5A5A5]">Select a year to view viva questions</p> {/* Slightly darker light gray for description */}
            </div>

            {/* Stylish and Eye-Catching Buttons */}
            <div className="flex flex-wrap justify-center gap-4"> {/* Added justify-center to center buttons */}
                {Object.keys(yearAndSubjects).map((year) => (
                    <a key={year} href={`/${year}`} className="block"> {/* block class helps the anchor fill the button area */}
                        <button className="
                      bg-[#2A2A2A] text-[#D7DADC] font-semibold
                      px-6 py-3 rounded-lg shadow-md
                      hover:bg-[#3A3A3A] hover:text-white hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50
                      transition duration-300 ease-in-out
                      transform hover:-translate-y-1
                    ">
                            {year}
                        </button>
                    </a>
                ))}
            </div>
        </div>
    );
}