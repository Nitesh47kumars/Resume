import SectionTitle from "./SectionTitle";

export default function Experience() {
    return (
        <section>
            <SectionTitle title="Experience" />

            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-[13px] font-bold text-black">
                            Web Developer Intern
                        </h3>

                        <p className="text-xs font-medium text-gray-700">
                            ThecodersHub • Remote
                        </p>
                    </div>

                    <span className="text-xs font-medium text-gray-700">
                        Jun 2026 – Present
                    </span>
                </div>

                <ul className="list-disc list-inside text-xs space-y-0.5">
                    <li>
                        Built responsive React and TypeScript interfaces with Tailwind CSS,
                        integrated REST and Google APIs, and implemented new admin dashboard
                        features using Node.js, Express.js, and MongoDB.
                    </li>

                    <li>
                        Improved application usability by restructuring layouts, resolving bugs,
                        and collaborating with the development team through Git, GitHub, Jira, and
                        Microsoft Teams.
                    </li>
                </ul>
            </div>
        </section>
    );
}