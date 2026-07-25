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
                        Developed and improved application features, enhanced layouts, and contributed to an AI-powered EPUB/PDF reader.
                    </li>

                    <li>
                        Participated in code reviews, tested features before deployment, resolved merge conflicts, and collaborated with the team using Git, GitHub, Jira, and Microsoft Teams.
                    </li>

                    <li>
                        Identified and fixed UI inconsistencies and verified feature functionality to improve the overall user experience.
                    </li>
                </ul>
            </div>
        </section>
    );
}